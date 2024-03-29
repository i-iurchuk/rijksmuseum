import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import { HomePage, ObjectPage, NoMatchPage } from './pages';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home-page',
    exact: true
  },
  {
    path: '/object/:id',
    component: ObjectPage,
    name: 'tile-page'
  },
  {
    path: '*',
    component: NoMatchPage,
    name: 'no-match'
  },
];

const App = () =>
  <Router>
    <Switch>
      {routes.map(({ path, name, component, exact }) =>
        <Route
          key={name}
          path={path}
          component={component}
          exact={exact}
        />
      )}
    </Switch>
  </Router>;

export default App;
