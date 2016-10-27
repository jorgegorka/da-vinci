import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';
import { ImagesUploader } from '../../middleware/images/uploader.js';
const fs = require('fs');

Meteor.methods({
  'pages.create'(params) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      newPage = new Page();
      newPage.create(params);
    }
  }
});


Meteor.methods({
  'pages.update'(pageId, params) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      newPage = new Page(pageId);
      newPage.update(params);
    }
  }
});

Meteor.methods({
  'pages.destroy'(pageId) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      newPage = new Page(pageId);
      newPage.destroy();
    }
  }
});

Meteor.methods({
  'pages.addImage'(pageId, contentId, title, fileName, fileType, fileData) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      let image = {
        fileName: pageId + '/' + Date.now().toString() + '.' + fileName.split('.').pop(),
        fileType: fileType,
        fileData: new Buffer(fileData, 'binary'),
      };

      imageUploader = new ImagesUploader(image);
      data = imageUploader.upload();
      newPage = new Page(pageId);
      newPage.updateContent(contentId, data.Location, title);
    }
  }
});
