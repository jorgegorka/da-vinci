import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { Category } from '../../middleware/categories/category.js';

Meteor.methods({
  'categories.addCategory'() {
    name = 'dummy';
    check(name, String);

    newCategory = new Category;
    newCategory.create();
  }
});
