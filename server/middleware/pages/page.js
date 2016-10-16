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
      parentId: Match.Maybe(String),
      order: Match.Maybe(Number),
      languages: Match.Maybe([Object])
    });
  }
}
