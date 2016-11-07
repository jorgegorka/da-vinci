import { Pages } from '../../lib/collections/pages.js';
import { check } from 'meteor/check';

import { PagesFinder } from '../middleware/pages/finder.js';

Meteor.publish('pages', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Pages.find({}, { $sort: { order: 0 }});
});

Meteor.publish('showPage', function(pageId) {
  check(pageId, String);

  return Pages.find({ _id: pageId });
});

Meteor.publish('findPages', function(pageIds) {
  check(pageIds, [String]);

  return Pages.find({ _id: { $in: pageIds } }, { $sort: { order: 0 }, limit: 30 });
});


Meteor.publish('publicMenuPages', function() {
  return Pages.find({ showInMenu: true }, { $sort: { order: 0 }});
});

Meteor.publish('pageWithRelatedProducts', function(pageId) {
  check(pageId, String);

  this.added('pages', pageId, PagesFinder.withRelatedProducts(pageId));
  return this.ready();
});
