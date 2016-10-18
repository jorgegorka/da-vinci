import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';

Meteor.methods({
  'pages.create'(params) {
    newPage = new Page();
    newPage.create(params);
  }
});


Meteor.methods({
  'pages.update'(cId, params) {
    newPage = new Page(cId);
    newPage.update(params);
  }
});

Meteor.methods({
  'pages.destroy'(cId) {
    newPage = new Page(cId);
    newPage.destroy();
  }
});
