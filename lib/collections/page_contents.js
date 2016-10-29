import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.pageContent = new SimpleSchema({
  text: {
    type: String,
    label: 'Content text',
    optional: true,
    index: false,
    unique: true,
  },

  contentType: {
    type: String,
    label: 'Page',
    index: true,
    optional: false,
  },

  imagePath: {
    type: String,
    label: 'Image path',
    optional: true,
    index: false,
    unique: true,
  },

  imageTitle: {
    type: String,
    label: 'Image title',
    optional: true,
    index: false,
    unique: true,
  },

  pageId: {
    type: String,
    label: 'Page',
    index: true,
    optional: false,
  },

  order: {
    type: Number,
    label: 'Order',
    index: true,
    optional: true,
    defaultValue: 0,
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

export const PageContents = new Mongo.Collection('pagecontents');
