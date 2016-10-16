import { Pages } from '../../../lib/collections/pages.js';

export class PagesFinder {
  constructor(parentId) {
    this.parentId = parentId;
  }

  findRecursive() {
    this._getPages(this.parentId);
  }

  _getPages(parentId) {
    let pages = Pages.find({ parentId: parentId }, { $sort: { order: 0 }});
    return pages.map(function(page) {
      let subPages = Pages.find({ parentId: page._id }, { $sort: { order: 0 }}).count();
      return {
        _id: page._id,
        name: page.name,
        subPages: subPages,
        subPages: 0,
      }
    });
  }
}
