import { Pages } from '../../lib/collections/pages.js';
import { check } from 'meteor/check';

import { PagesFinder } from '../middleware/pages/finder.js';

Meteor.publish('pages', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Pages.find({}, { $sort: { order: 0 }});
});
