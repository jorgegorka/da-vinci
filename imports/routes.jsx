import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import i18n from 'meteor/universe:i18n';

import DaVinciPublic from './ui/public/da_vinci_public.jsx';
import HomePage from './ui/public/home_page.jsx';
import NotFound from './ui/public/not_found.jsx';
import Login from './ui/public/login/login.jsx';


// public routes
import PublicPagesShow from './ui/public/pages/show.jsx';

// admin routes
import DaVinci from './ui/admin/da_vinci.jsx';
import DashboardIndex from './ui/admin/dashboard/index.jsx';
import SettingsIndex from './ui/admin/settings/index.jsx';
import PagesIndex from './ui/admin/pages/index.jsx';
import PagesShow from './ui/admin/pages/show.jsx';

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ DaVinciPublic }>
      <IndexRoute component={ HomePage } />
      <Route path="login" component={ Login } />
      <Route path={ i18n.__('settings.pageRoute') + '/:nameSlug' } component={ PublicPagesShow } />
    </Route>
    <Route path="/admin" component={ DaVinci }>
      <IndexRoute component={ DashboardIndex } />
      <Route path="settings" component={ SettingsIndex } />
      <Route path="pages" component={ PagesIndex } />
      <Route path="page/:nameSlug" component={ PagesShow } />
    </Route>
    <Route path="*" component={ NotFound } />
  </Router>
);
