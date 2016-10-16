import { Categories } from '../../lib/collections/categories.js';
import { check } from 'meteor/check';

import { CategoriesFinder } from '../middleware/categories/finder.js';

Meteor.publish('categories', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Categories.find({}, { $sort: { order: 0 }});
});
