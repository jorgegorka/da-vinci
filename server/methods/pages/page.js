import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';

Meteor.methods({
  'pages.addPage'(params) {
    newPage = new Page();
    newPage.create(params);
  }
});


Meteor.methods({
  'pages.updatePage'(cId, params) {
    newPage = new Page(cId);
    newPage.update(params);
  }
});
