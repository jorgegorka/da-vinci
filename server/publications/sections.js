import { Sections } from '../../lib/collections/sections.js';
import { check } from 'meteor/check';

import { SectionsFinder } from '../middleware/sections/finder.js';

Meteor.publish('sections', function() {
  if (!this.userId) {
    return this.ready();
  }

  return Sections.find({}, { $sort: { order: 0 }});
});
