import { Meteor } from 'meteor/meteor';
import { Section } from '../../middleware/sections/section.js';

Meteor.methods({
  'sections.addSection'(params) {
    newSection = new Section();
    newSection.create(params);
  }
});


Meteor.methods({
  'sections.updateSection'(cId, params) {
    newSection = new Section(cId);
    newSection.update(params);
  }
});
