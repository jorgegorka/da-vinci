import { Categories } from '../../../lib/collections/categories.js';

export class Category {
  constructor() {

  }

  create() {
    Categories.insert({ name: 'Music' });
  }
}
