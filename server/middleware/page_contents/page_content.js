import { check, Match } from 'meteor/check';
import UrlParse from 'url-parse';

import { PageContents } from '../../../lib/collections/page_contents.js';
import { ImagesUploader } from '../../middleware/images/uploader.js';

export class PageContent {
  constructor(pageContentId) {
    check(pageContentId, String);
    if (pageContentId.substring(0, 3) !== 'new') {
      this.pageContentId = pageContentId;
    }
    this.pageContentData = {};
  }

  upsertContent(pageContentParams) {
    this.pageContentData["pageId"] = pageContentParams.pageId;
    this.pageContentData["text"] = pageContentParams.text || '';
    this.pageContentData["contentType"] = pageContentParams.contentType;
    this.pageContentData["imageTitle"] = pageContentParams.imageTitle;
    this.pageContentData["order"] = pageContentParams.order || 0;
    this.pageContentData["targetLink"] = this._parseTargetLink(pageContentParams.targetLink);
    this._uploadImage(pageContentParams);

    if (this.pageContentId) {
      return this._updateContent();
    } else {
      return this._insertContent()
    }
  }

  destroy() {
    pageContent = PageContents.findOne({ _id: this.pageContentId });
    if (pageContent.imagePath) {
      let imageUploader = new ImagesUploader();
      imageUploader.destroy(pageContent.imagePath);
    }
    PageContents.remove({ _id: this.pageContentId });
  }

  _insertContent() {
    this._validate();
    return PageContents.insert(this.pageContentData);
  }

  _updateContent(pageContentParams) {
    delete this.pageContentData["pageId"];
    delete this.pageContentData["contentType"];
    this._validate();
    return PageContents.update({ _id: this.pageContentId }, { $set: this.pageContentData });
  }

  _validate() {
    check(this.pageContentData, {
      pageId: Match.Maybe(String),
      contentType: Match.Maybe(String),
      text: Match.Maybe(String),
      targetLink: Match.Maybe(String),
      imagePath: Match.Maybe(String),
      imageTitle: Match.Maybe(String),
      originalImageName: Match.Maybe(String),
      originalImageSize: Match.Maybe(Number),
      order: Match.Maybe(Number),
    });
  }

  _uploadImage(pageContentParams) {
    if (this._imageIsValid(pageContentParams)) {
      let image = {
        fileName: pageContentParams.pageId + '/' + Date.now().toString() + '.' + pageContentParams.fileName.split('.').pop(),
        fileType: pageContentParams.fileType,
        fileData: pageContentParams.fileData
      };
      let imageUploader = new ImagesUploader();
      this.pageContentData["imagePath"] = imageUploader.upload(image).Location;
      this.pageContentData["originalImageName"] = pageContentParams.originalImageName;
      this.pageContentData["originalImageSize"] = pageContentParams.originalImageSize;
    };
  }

  _imageIsValid(pageContentParams) {
    return this._imageIsPresent(pageContentParams) && this._imageHasChanged(pageContentParams)
  }

  _imageIsPresent(pageContentParams) {
    return (pageContentParams.pageId && pageContentParams.fileName && pageContentParams.fileData && pageContentParams.fileType);
  }

  _imageHasChanged(pageContentParams) {
    if (this.pageContentId) {
      currentContent = PageContents.findOne({ _id: this.pageContentId });
      return ((pageContentParams.fileName !== currentContent.originalImageName) || (pageContentParams.fileSize !== currentContent.originalImageSize))
    } else {
      return true;
    }
  }

  _parseTargetLink(targetLink) {
    if (!targetLink) {
      return '';
    }

    // Remove hostname from target link
    let url = new UrlParse(targetLink);
    return url.pathname;
  }
}
