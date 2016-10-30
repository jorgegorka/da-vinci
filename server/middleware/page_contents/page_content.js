import { Pages } from '../../../lib/collections/pages.js';
import { PageTypes } from '../../../lib/collections/page_types.js';
import { PageContents } from '../../../lib/collections/page_contents.js';
import { check, Match } from 'meteor/check';

export class PageContent {
  constructor(pageContentId) {
    if (pageContentId !== 'new') {
      this.pageContentId = pageContentId;
    }
  }

  upsertContent(pageContentParams) {
    if (this.pageContentId) {
      delete pageContentParams["pageId"];
      delete pageContentParams["contentType"];
      return this.updateContent(pageContentParams);
    } else {
      return this.insertContent(pageContentParams)
    }
  }

  insertContent(pageContentParams) {
    this.validate(pageContentParams);
    return PageContents.insert(pageContentParams);
  }

  updateContent(pageContentParams) {
    this.validate(pageContentParams);
    return PageContents.update({ _id: this.pageContentId }, { $set: pageContentParams });
  }

  updatePageContent(pageId, pageContent) {
    let page = Pages.findOne({ _id: pageId });
    let pageType = PageTypes.findOne({ _id: page.pageTypeId });
    pageType.textAreas.forEach( function(textArea) {
      if (pageContent[textArea]) {
        check(pageContent[textArea], String);
        PageContents.update({ pageId: pageId, contentType: textArea }, { $set: { text: pageContent[textArea] } });
      }
    });
  }

  validate(pageContentParams) {
    check(pageContentParams, {
      pageId: Match.Maybe(String),
      contentType: Match.Maybe(String),
      text: Match.Maybe(String),
      imagePath: Match.Maybe(String),
      imageTitle: Match.Maybe(String),
      order: Match.Maybe(Number),
    });
  }
}
