import { Pages } from '../../../lib/collections/pages.js';
import { PageTypes } from '../../../lib/collections/page_types.js';
import { PageContents } from '../../../lib/collections/page_contents.js';
import { check, Match } from 'meteor/check';

export class PageContent {
  constructor(pageContentId=null) {
    this.pageContentId = pageContentId;
  }

  updateContent(path, text) {
    this.validate({ path: path, text: text });
    PageContents.update({ _id: this.pageContentId }, { $set: { text: text, path: path } });
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

  validate(pageParams) {
    check(pageParams, {
      text: Match.Maybe(String),
      path: Match.Maybe(String),
      order: Match.Maybe(Number)
    });
  }
}
