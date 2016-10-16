import { Sections } from '../../../lib/collections/sections.js';
import { check, Match } from 'meteor/check'

export class Section {
  constructor(sectionId) {
    this.sectionId = sectionId;
  }

  create(sectionParams) {
    this.validate(sectionParams);
    Sections.insert(sectionParams);
  }

  update(sectionParams) {
    this.validate(sectionParams);
    Sections.update({ _id: this.sectionId }, { $set: sectionParams });
  }

  validate(sectionParams) {
    check(sectionParams, {
      name: String,
      parentId: Match.Maybe(String),
      order: Match.Maybe(Number),
      languages: Match.Maybe([Object])
    });
  }
}
