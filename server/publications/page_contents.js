import { PageContents } from '../../lib/collections/page_contents.js';
import { check } from 'meteor/check';

Meteor.publish('pageContentsForPage', function(pageId) {
  if (!this.userId) {
    return this.ready();
  }

  check(pageId, String);

  return PageContents.find({ pageId: pageId }, { sort: { order: 1 }});
});

Meteor.publish('pageContentsForType', function(pageId, contentType) {
  if (!this.userId) {
    return this.ready();
  }
  check(contentType, String);
  check(pageId, String);

  return PageContents.find({ pageId: pageId, contentType: contentType }, { sort: { order: 1 }});
});


Meteor.publish('pageContent', function(pageContentId) {
  if (!this.userId) {
    return this.ready();
  }

  check(pageContentId, String);

  return PageContents.find({ _id: pageContentId });
});
