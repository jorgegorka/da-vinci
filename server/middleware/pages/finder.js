import { Pages } from '../../../lib/collections/pages.js';

import { PagesRelatedProducts } from './related_products.js';

export class PagesFinder {
  static withRelatedProducts(pageId, qty=3) {
    let currentPage = Pages.findOne( { _id: pageId } )
    let relatedIds = new PagesRelatedProducts(currentPage._id, currentPage.tags, qty).find();
    currentPage['relatedIds'] = relatedIds || [];
    return currentPage;
  }
}
