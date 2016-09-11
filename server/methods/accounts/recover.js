import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'users.recoverPassword'(userEmail) {
    check(userEmail, String);

    user = Accounts.findUserByEmail(userEmail);
    if (user) {
      console.log(user);
      Accounts.sendResetPasswordEmail(user._id, [userEmail]);
    } else {

    };
  }
});
