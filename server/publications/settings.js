import { Settings } from '../../lib/collections/settings.js';

Meteor.publish('defaultSettings', function() {
  return Settings.find();
});
