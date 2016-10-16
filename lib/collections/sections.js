import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.section = new SimpleSchema({
  name: {
    type: String,
    label: 'Section name',
    optional: false,
    index: true,
    unique: true,
  },

  parentId: {
    type: String,
    label: 'Parent section',
    index: true,
    optional: true,
    defaultValue: 'top',
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

  "languages.$.name": {
    type: String,
    label: 'Language name',
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

export const Sections = new Mongo.Collection('sections');
