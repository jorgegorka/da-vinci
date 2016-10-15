import { Categories } from '../../lib/collections/categories.js';

Meteor.publish('categories', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Categories.find();
});
