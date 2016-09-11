import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles'

export default class SetupDaVinci {
  constructor(email, password, name) {
    this.adminEmail    = email;
    this.adminPassword = password;
    this.adminName     = name;
    this.addAdminAndRoles();
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
    Roles.createRole('publisher');
    Roles.createRole('editor');
    Roles.createRole('writer');

    adminUser = Accounts.findUserByUsername('admin');

    Roles.addUsersToRoles(adminUser._id, 'admin', Roles.GLOBAL_GROUP);
  }
}
