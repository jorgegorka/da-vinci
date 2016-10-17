import { Pages } from '../../../lib/collections/pages.js';
import { check, Match } from 'meteor/check'

export class Page {
  constructor(pageId) {
    this.pageId = pageId;
  }

  create(pageParams) {
    this.validate(pageParams);
    Pages.insert(pageParams);
  }

  update(pageParams) {
    this.validate(pageParams);
    Pages.update({ _id: this.pageId }, { $set: pageParams });
  }

  validate(pageParams) {
    check(pageParams, {
      name: String,
      isHomePage: Boolean,
      pageTypeId: String,
      parentId: Match.Maybe(String),
      order: Match.Maybe(Number),
      languages: Match.Maybe([Object]),
    });

    if ((pageParams.isHomePage === true) && _homePageTaken()) {
      throw new Meteor.Error("homepage", "There is another page already marked as Homepage.");
    }
  }

  _homePageTaken() {
    Pages.findOne({ isHomePage: true })
  }
}
