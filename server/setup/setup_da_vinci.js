import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles'
import { PageTypes } from '../../lib/collections/page_types.js';
import { SetupContents } from '../lib/setup/contents.js';

export default class SetupDaVinci {
  constructor(email, password, name) {
    this.adminEmail    = email;
    this.adminPassword = password;
    this.adminName     = name;
    this.addAdminAndRoles();
    this.addPageTypes();
  }

  addAdminAndRoles() {
    Accounts.createUser({
      username: 'admin',
      email: this.adminEmail,
      password: this.adminPassword,
      profile: {
        name: this.adminName
      }
    });

    Roles.createRole('admin');
    Roles.createRole('manager');
    Roles.createRole('publisher');
    Roles.createRole('editor');
    Roles.createRole('writer');
    Roles.createRole('viewer');

    adminUser = Accounts.findUserByUsername('admin');

    Roles.addUsersToRoles(adminUser._id, 'admin', Roles.GLOBAL_GROUP);
  }

  // This is hardcoded now.  It will be possible to create and modify page types in future versions.
  addPageTypes() {
    let pageTypes = SetupContents.availablePages();

    pageTypes.forEach(function(pageType) { PageTypes.insert({ name: pageType['name'], textAreas: pageType['content'], imageAreas: pageType['images'] }) });
  }
}
