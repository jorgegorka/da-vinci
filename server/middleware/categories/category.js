import { Categories } from '../../../lib/collections/categories.js';
import { check, Match } from 'meteor/check'

export class Category {
  constructor(categoryId) {
    this.categoryId = categoryId;
  }

  create(categoryParams) {
    this.validate(categoryParams);
    Categories.insert(categoryParams);
  }

  update(categoryParams) {
    this.validate(categoryParams);
    Categories.update({ _id: this.categoryId }, { $set: categoryParams });
  }

  validate(categoryParams) {
    check(categoryParams, {
      name: String,
      parentId: Match.Maybe(String),
      order: Match.Maybe(Number),
      languages: Match.Maybe([Object])
    });
  }
}
