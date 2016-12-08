import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Schemas } from '../schemas.js';

Schemas.settings = new SimpleSchema({
  siteName: {
    type: String,
    label: 'Site name',
    optional: true,
    index: false,
    unique: false
  },

  publicEmail: {
    type: String,
    label: 'Public email visible on site',
    optional: true,
    index: false,
    unique: false
  },

  contactInfo: {
    type: Object,
    label: 'Contact data',
    blackbox: true,
    optional: true,
  },

  googleAnalytics: {
    type: String,
    label: 'Your google analytics tracking code',
    optional: true,
    index: false,
    unique: false
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

export const Settings = new Mongo.Collection('settings');
