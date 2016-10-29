import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';
import { ImagesUploader } from '../../middleware/images/uploader.js';
import { PageContent } from '../../middleware/page_contents/page_content.js';

Meteor.methods({
  'pageContents.addImage'(pageContentParams, fileData) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      let image = {
        fileName: pageContentParams.pageId + '/' + Date.now().toString() + '.' + pageContentParams.fileName.split('.').pop(),
        fileType: pageContentParams.fileType,
        fileData: new Buffer(fileData, 'binary'),
      };

      imageUploader = new ImagesUploader(image);
      data = imageUploader.upload();
      pageContentData = {
        pageId: pageContentParams.pageId,
        contentType: pageContentParams.contentType,
        imagePath: data.Location,
        imageTitle: pageContentParams.imageTitle,
        text: pageContentParams.text,
        order: parseInt(pageContentParams.order)
      }
      pageContent = new PageContent(pageContentParams.pageContentId);
      pageContent.upsertContent(pageContentData)
    }

  },

  'pageContents.update'(pageId, userContent) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      pageContent = new PageContent();
      pageContent.updatePageContent(pageId, userContent);
    }
  }
});
