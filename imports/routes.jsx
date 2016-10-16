import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import DaVinciPublic from './ui/public/da_vinci_public.jsx';
import HomePage from './ui/public/home_page.jsx';
import NotFound from './ui/public/not_found.jsx';
import Login from './ui/public/login/login.jsx';

// route admin
import DaVinci from './ui/admin/da_vinci.jsx';
import Dashboard from './ui/admin/dashboard.jsx';
import CategoriesIndex from './ui/admin/categories/index.jsx';
import CategoriesShow from './ui/admin/categories/show.jsx';

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ DaVinciPublic }>
      <IndexRoute component={ HomePage } />
      <Route path="login" component={ Login } />
    </Route>
    <Route path="/admin" component={ DaVinci }>
      <IndexRoute component={ Dashboard } />
      <Route path="categories" component={ CategoriesIndex } />
      <Route path="category/:categoryId" component={ CategoriesShow } />
    </Route>
    <Route path="*" component={ NotFound } />
  </Router>
);
