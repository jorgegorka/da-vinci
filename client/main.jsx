import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/routes.jsx';
import '../imports/ui/main.html';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('main-app'));
});
