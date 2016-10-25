import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';
const fs = require('fs');

Meteor.methods({
  'pages.create'(params) {
    newPage = new Page();
    newPage.create(params);
  }
});


Meteor.methods({
  'pages.update'(pageId, params) {
    newPage = new Page(pageId);
    newPage.update(params);
  }
});

Meteor.methods({
  'pages.destroy'(pageId) {
    newPage = new Page(pageId);
    newPage.destroy();
  }
});

Meteor.methods({
  'pages.addImage'(pageId, contentId, fileName, fileSize, fileType, fileData) {
    console.log(fileName);
    console.log(fileSize);
    console.log(fileType);
    let fileExtension = fileName.split('.').pop();
    let newFileName = pageId + '_' + Date.now().toString() + '.' + fileExtension;
    let fullFileName = process.cwd() + '/../../../../../public/page_images/' + newFileName;
    fs.writeFile(fullFileName, new Buffer(fileData, 'binary'));
    console.log('File saved');
    newPage = new Page(pageId);
    newPage.updateContent(contentId, newFileName);
  }
});
