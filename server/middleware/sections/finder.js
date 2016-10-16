import { Sections } from '../../../lib/collections/sections.js';

export class SectionsFinder {
  constructor(parentId) {
    this.parentId = parentId;
  }

  findRecursive() {
    this._getSections(this.parentId);
  }

  _getSections(parentId) {
    let sections = Sections.find({ parentId: parentId }, { $sort: { order: 0 }});
    return sections.map(function(section) {
      let subSections = Sections.find({ parentId: section._id }, { $sort: { order: 0 }}).count();
      return {
        _id: section._id,
        name: section.name,
        subSections: subSections,
        subPages: 0,
      }
    });
  }
}
