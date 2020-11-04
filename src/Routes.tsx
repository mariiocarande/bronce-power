// tslint:disable: jsx-no-lambda no-any
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';

import Charts from './views/ChartsPage';
import Homepage from './views/Homepage';

const Routes: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={history => <Homepage {...history} />}
        />

        <Route
          exact={true}
          path="/charts"
          render={history => <Charts {...history} /> }
        />
      </Switch>
    </Router>
  );
};

export default Routes;
