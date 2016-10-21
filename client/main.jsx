import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/routes.jsx';
import '../imports/ui/main.html';

Meteor.startup(() => {
  let fontStyle = document.createElement('link');
  fontStyle.setAttribute('rel', 'stylesheet');  // optional
  fontStyle.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
  document.getElementsByTagName('head')[0].appendChild(fontStyle);

  let iconsStyle = document.createElement('link');
  iconsStyle.setAttribute('rel', 'stylesheet');  // optional
  iconsStyle.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css');
  document.getElementsByTagName('head')[0].appendChild(iconsStyle);

  let summerNoteStyle = document.createElement('link');
  summerNoteStyle.setAttribute('rel', 'stylesheet');  // optional
  summerNoteStyle.setAttribute('href', 'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.css');
  document.getElementsByTagName('head')[0].appendChild(summerNoteStyle);

  let summerNoteJs = document.createElement('script');
  summerNoteJs.setAttribute('src', 'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.js');
  document.getElementsByTagName('head')[0].appendChild(summerNoteJs);

  render(renderRoutes(), document.getElementById('main-app'));
});
