import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import { Page } from '../../middleware/pages/page.js';
import { PageContent } from '../../middleware/page_contents/page_content.js';

Meteor.methods({
  'pageContents.addImage'(pageContentParams, fileData) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      pageContentData = {
        pageId: pageContentParams.pageId,
        contentType: pageContentParams.contentType,
        fileName: pageContentParams.pageId + '/' + Date.now().toString() + '.' + pageContentParams.fileName.split('.').pop(),
        fileType: pageContentParams.fileType,
        fileData: new Buffer(fileData, 'binary'),
        imageTitle: pageContentParams.imageTitle,
        originalImageName: pageContentParams.fileName,
        originalImageSize: pageContentParams.fileSize,
        text: pageContentParams.text,
        targetLink: pageContentParams.targetLink,
        order: parseInt(pageContentParams.order)
      };
      pageContent = new PageContent(pageContentParams.pageContentId);
      pageContent.upsertContent(pageContentData);
    };
  }
});

Meteor.methods({
  'pageContents.destroy'(pageContentId) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      check(pageContentId, String);

      pageContent = new PageContent(pageContentId);
      pageContent.destroy();
    }
  }
});
