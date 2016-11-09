import { Pages } from '../../../lib/collections/pages.js';
import { PageTypes } from '../../../lib/collections/page_types.js';
import { PageContents } from '../../../lib/collections/page_contents.js';
import { check, Match } from 'meteor/check';
import Slug from 'slug';

export class Page {
  constructor(pageId) {
    this.pageId = pageId;
  }

  create(pageParams) {
    this.pageParams = pageParams;
    this._generateSlug();
    this._validate();
    return Pages.insert(this.pageParams);
  }

  update(pageParams) {
    this.pageParams = pageParams;
    this._validate();
    return Pages.update({ _id: this.pageId }, { $set: this.pageParams });
  }

  destroy() {
    //destroy page contents.
    Pages.remove({ _id: this.pageId });
  }

  _validate() {
    check(this.pageParams, {
      name: String,
      nameSlug: String,
      isHomePage: Boolean,
      showInMenu: Boolean,
      draft: Boolean,
      pageTypeId: String,
      parentId: Match.Maybe(String),
      language: Match.Maybe(String),
      order: Match.Maybe(Number),
      content: Match.Maybe(Object),
      metaInfo: Match.Maybe(Object),
      tags: [String],
    });

    if ((this.pageParams.isHomePage === true) && this._homePageTaken()) {
      throw new Meteor.Error('homepage-already-set', 'There is another page already marked as Homepage.');
    }
  }

  _homePageTaken() {
    let query = { isHomePage: true }
    if (this.pageId) {
      query['_id'] = { $ne: this.pageId }
    }
    return(Pages.find(query).count() > 0);
  }

  _generateSlug() {
    check(this.pageParams.name, String);
    let nameSlug = Slug(this.pageParams.name).toLowerCase();
    while (Pages.findOne({ nameSlug: nameSlug })) {
      if (nameSlug.slice(-2, -1) === '-') {
        let n = nameSlug.lastIndexOf('-');
        let firstPart = nameSlug.substring(0, n);
        let result = parseInt(nameSlug.substring(n + 1));
        result ++;
        nameSlug = firstPart + '-' + result;
      } else {
        nameSlug += '-0';
      }
    }
    this.pageParams.nameSlug = nameSlug;
  }
}
