import { Meteor } from 'meteor/meteor';
import { Page } from '../../middleware/pages/page.js';
import { ImagesUploader } from '../../middleware/images/uploader.js';
import { PageContent } from '../../middleware/page_contents/page_content.js';

Meteor.methods({
  'pageContents.addImage'(pageId, pageContentId, text, fileName, fileType, fileData) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      let image = {
        fileName: pageId + '/' + Date.now().toString() + '.' + fileName.split('.').pop(),
        fileType: fileType,
        fileData: new Buffer(fileData, 'binary'),
      };

      imageUploader = new ImagesUploader(image);
      data = imageUploader.upload();
      pageContent = new PageContent(pageContentId);
      pageContent.updateContent(data.Location, text)
    }

  },

  'pageContents.update'(pageId, userContent) {
    if (Roles.userIsInRole(this.userId, ['admin', 'manager', 'publisher'])) {
      pageContent = new PageContent();
      pageContent.updatePageContent(pageId, userContent);
    }
  }
});
