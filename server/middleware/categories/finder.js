import { Categories } from '../../../lib/collections/categories.js';

export class CategoriesFinder {
  constructor(parentId) {
    this.parentId = parentId;
  }

  findRecursive() {
    this._getCategories(this.parentId);
  }

  _getCategories(parentId) {
    let categories = Categories.find({ parentId: parentId }, { $sort: { order: 0 }});
    return categories.map(function(category) {
      let subCategories = Categories.find({ parentId: category._id }, { $sort: { order: 0 }}).count();
      return {
        _id: category._id,
        name: category.name,
        subCategories: subCategories,
        subPages: 0,
      }
    });
  }
}
