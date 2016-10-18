import { PageContents } from '../../lib/collections/page_contents.js';
import { check } from 'meteor/check';

Meteor.publish('pageContents', function() {
  if (!this.userId) {
    return this.ready();
  }

  return PageContents.find({}, { $sort: { createdAt: 0 } });
});
