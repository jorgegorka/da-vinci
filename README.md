# Da Vinci
Experimenting with Meteor JS, React, React router, Mocha and I18n all at once.

#### What is available:
* Basic login and password recovery
* Create account deactivated (only admins can create accounts).
* Setup script that bootstrap the app and database created.
  * To execute run meteor:
      `meteor shell`
  * Import script and instantiate it: `import SetupDaVinci from './server/setup/setup_da_vinci.js';` then `new SetupDaVinci('your@email.com', 'password', 'Your name');`
  * A new admin user will be created with provided info.
* Basic route schema with react-router.
  * Public routes
  * Private routes: Require login.



### Dependencies
    meteor npm install --save react react-dom
    meteor npm install --save react-addons-pure-render-mixin
    meteor add react-meteor-data
    meteor npm install --save react-router
    meteor npm install --save bcrypt
    meteor npm install --save classnames
    meteor add accounts-ui accounts-password
    meteor add twbs:bootstrap
    meteor add fourseven:scss
    meteor remove standard-minifier-css
    meteor add seba:minifiers-autoprefixer
    meteor add universe:i18n  - https://atmospherejs.com/universe/i18n
    meteor npm install react-s-alert --save
    meteor add alanning:roles
    meteor add aldeed:collection2
    meteor npm install moment --save

    *Testing*
    meteor add practicalmeteor:mocha
    meteor add xolvio:cleaner
    meteor npm i --save-dev enzyme
    meteor add dburles:factory
    meteor npm i --save-dev faker
    meteor add hwillson:stub-collections
    meteor npm install --save meteor-node-stubs react react-addons-test-utils
    meteor add practicalmeteor:mocha-console-runner
    meteor add practicalmeteor:mocha-console-reporter
    meteor add practicalmeteor:loglevel


### Acknowledgments

This project uses a lot of awesome open source libraries, plugins and templates.  We would like to thank the open source community for his hard work.

[AdminLTE admin template](https://almsaeedstudio.com/themes/AdminLTE/index2.html).  

### License

Da-Vinci is licensed under the [MIT License](http://opensource.org/licenses/MIT).
