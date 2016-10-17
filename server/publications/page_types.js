import { PageTypes } from '../../lib/collections/page_types.js';
import { check } from 'meteor/check';

Meteor.publish('pageTypes', function() {
  if (!this.userId) {
    return this.ready();
  }

  return PageTypes.find({}, { $sort: { name: 0 }});
});
