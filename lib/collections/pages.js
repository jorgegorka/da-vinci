import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.page = new SimpleSchema({
  name: {
    type: String,
    label: 'Page name',
    optional: false,
    index: true,
    unique: true,
  },

  pageTypeId: {
    type: String,
    label: 'Type of page',
    index: true,
    optional: false,
  },

  parentId: {
    type: String,
    label: 'Parent page',
    index: true,
    optional: true,
    defaultValue: 'top',
  },

  isHomePage: {
    type: Boolean,
    label: 'Set as Home page',
    optional: false,
    defaultValue: false,
  },

  showInMenu: {
    type: Boolean,
    label: 'Show page in main menu',
    optional: false,
    defaultValue: true,
  },

  order: {
    type: Number,
    label: 'Order ID',
    index: true,
    optional: true,
    defaultValue: 0,
  },

  languages: {
    type: [Object],
    optional: true,
  },

  "languages.$.languageCode": {
    type: String,
    label: 'Language code',
    index: true,
  },

  "languages.$.pageContentId": {
    type: String,
    label: 'Content page',
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

export const Pages = new Mongo.Collection('pages');
