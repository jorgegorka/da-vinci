import { Pages } from '../../../lib/collections/pages.js';
import { PageTypes } from '../../../lib/collections/page_types.js';
import { PageContents } from '../../../lib/collections/page_contents.js';
import { check, Match } from 'meteor/check'

export class Page {
  constructor(pageId) {
    this.pageId = pageId;
  }

  create(pageParams) {
    this.validate(pageParams);
    return Pages.insert(pageParams);
  }

  update(pageParams) {
    this.validate(pageParams);
    return Pages.update({ _id: this.pageId }, { $set: pageParams });
  }

  destroy() {
    //destroy page contents.
    Pages.remove({ _id: this.pageId });
  }

  validate(pageParams) {
    check(pageParams, {
      name: String,
      isHomePage: Boolean,
      showInMenu: Boolean,
      draft: Boolean,
      pageTypeId: String,
      parentId: Match.Maybe(String),
      language: Match.Maybe(String),
      order: Match.Maybe(Number),
      content: Match.Maybe(Object),
      metaInfo: Match.Maybe(Object),
    });

    if ((pageParams.isHomePage === true) && this._homePageTaken()) {
      throw new Meteor.Error("homepage-already-set", "There is another page already marked as Homepage.");
    }
  }

  _homePageTaken() {
    let query = { isHomePage: true }
    if (this.pageId) {
      query['_id'] = { $ne: this.pageId }
    }
    return(Pages.find(query).count() > 0);
  }
}
