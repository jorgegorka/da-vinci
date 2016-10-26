import { Pages } from '../../lib/collections/pages.js';
import { check } from 'meteor/check';

Meteor.publish('pages', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Pages.find({}, { $sort: { order: 0 }});
});