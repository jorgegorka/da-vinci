import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.category = new SimpleSchema({
  name: {
    type: String,
    label: 'Category name',
    optional: false,
    index: true,
    unique: true,
  },

  parentId: {
    type: String,
    label: 'Parent category',
    index: true,
    optional: true,
  },

  orderId: {
    type: Number,
    label: 'Order ID',
    index: true,
    optional: true,
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

export const Categories = new Mongo.Collection('categories');
