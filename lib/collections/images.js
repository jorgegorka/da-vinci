import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.image = new SimpleSchema({
  title: {
    type: String,
    label: 'Image title',
    optional: true,
    index: true,
    unique: true,
  },

  path: {
    type: String,
    label: 'Image title',
    optional: true,
    index: true,
    unique: true,
  },

  pageId: {
    type: String,
    label: 'Page',
    index: true,
    optional: false,
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

export const Images = new Mongo.Collection('images');
