import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './views/app';
import Home from './views/home';
import Error404 from './views/Error404';

export default () => (
  <Route component={App} path='/'>
    <IndexRoute component={Home} />
    <Route component={Error404} path='*' />
  </Route>
);
