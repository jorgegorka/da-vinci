import { Categories } from '../../../lib/collections/categories.js';
import { check, Match } from 'meteor/check'

export class Category {
  constructor(category) {
    check(category, {
      name: String,
      parentId: Match.Maybe(String),
      order: Match.Maybe(Number),
      languages: Match.Maybe([Object])
    });

    this.category = category;
  }

  create() {
    Categories.insert(this.category);
  }
}
