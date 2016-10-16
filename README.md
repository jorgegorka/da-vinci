# Da Vinci
Da Vinci is a website generator created as a way of experimenting with Meteor JS, React, React router, Mocha and I18n all at once.

It's in an early stage and not suitable to be used in production.

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
* Sections. Sections can be nested into subsections.

#### TODO (prioritised)

* Pages. A page belongs to a section.
* Images. A page can have many images associated with it.
* Each image can have different sizes for different parts of the page (thumbnails, medium, large, etc...). Sizes are configurable by user.
* Reorder of sections. Drag and drop reorder of sections.
* Contact form. Customisable contact form.
* Multi-language.
* Tags. A page can get multiple tags assigned to it.
* Public templates. Instructions about how to install a template for the public pages.  Everything is based on bootstrap so adding a template created with bootstrap should require almost no effort.
* Blog/News section.
* User accounts with roles (viewer, writer, editor, publisher, manager, admin)
* Public pages accessible via login. Some pages on the public site can only be accessible by logged in users.

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

### Acknowledgments

This project uses some awesome open source frameworks, libraries, plugins and templates.  I would like to thank the open source community for their hard work.

[Meteor](https://www.meteor.com)

[MongoDb](https://www.mongodb.com)

[React](https://facebook.github.io/react/)

[Bootstrap](http://getbootstrap.com/)

[jQuery](https://jquery.com/)

[AdminLTE admin template](https://almsaeedstudio.com/themes/AdminLTE/index2.html)

... and many others.

### License

Da-Vinci is licensed under the [MIT License](http://opensource.org/licenses/MIT).
