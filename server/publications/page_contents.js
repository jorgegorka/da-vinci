import { PageContents } from '../../lib/collections/page_contents.js';
import { check } from 'meteor/check';

Meteor.publish('pageContent', function(pageId) {
  if (!this.userId) {
    return this.ready();
  }

  check(pageId, String);

  return PageContents.find({ pageId: pageId }, { $sort: { order: 0 }});
});
