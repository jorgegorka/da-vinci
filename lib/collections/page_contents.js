import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.pageContent = new SimpleSchema({
  content: {
    type: [Object],
    optional: false,
  },

  pageId: {
    type: String,
    label: 'Parent page',
    index: true,
    optional: true,
    defaultValue: 'top',
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      } else {
        return this.unset();
      }
    },
    denyUpdate: true,
    optional: true
  },

  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: false,
    optional: true
  },
});

export const PageContents = new Mongo.Collection('pagecontent');
