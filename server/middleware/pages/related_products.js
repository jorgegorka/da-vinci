import { Pages } from '../../../lib/collections/pages.js';
import { PageContents } from '../../../lib/collections/page_contents.js';

export class PagesRelatedProducts {
  constructor(pageId, tags, qty) {
    this.pageId = pageId;
    this.tags = tags;
    this.qty = qty;
  }

  find() {
    let results = Pages.find({ _id: { $ne: this.pageId }, tags: { $in: this.tags } }, { limit: this.qty });
    return results.map( function(result) {
      let image = PageContents.findOne({ pageId: result._id, contentType: 'product-image' }, { sort: { order: 1 } });
      if (image) {
        return {
          _id: result._id,
          title: result.name,
          info: result.metaInfo['description'],
          imagePath: image.imagePath
        };
      }
    });
  }
}
