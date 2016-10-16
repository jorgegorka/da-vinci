import { Meteor } from 'meteor/meteor';
import { Category } from '../../middleware/categories/category.js';

Meteor.methods({
  'categories.addCategory'(params) {
    newCategory = new Category();
    newCategory.create(params);
  }
});


Meteor.methods({
  'categories.updateCategory'(cId, params) {
    newCategory = new Category(cId);
    newCategory.update(params);
  }
});
