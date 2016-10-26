import { Schemas } from './schemas.js';
import { Pages } from './collections/pages.js';
import { PageTypes } from './collections/page_types.js';
import { Images } from './collections/images.js';

Pages.attachSchema(Schemas.page);
PageTypes.attachSchema(Schemas.pageType);
Images.attachSchema(Schemas.image);
