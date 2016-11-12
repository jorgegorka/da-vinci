import { Schemas } from './schemas.js';
import { Settings } from './collections/settings.js';
import { Pages } from './collections/pages.js';
import { PageTypes } from './collections/page_types.js';
import { PageContents } from './collections/page_contents.js';

Settings.attachSchema(Schemas.settings);
Pages.attachSchema(Schemas.page);
PageTypes.attachSchema(Schemas.pageType);
PageContents.attachSchema(Schemas.pageContent);
