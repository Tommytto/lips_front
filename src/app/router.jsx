import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ExampleContainer } from '../example/containers/ExampleContainer/index';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route component={ExampleContainer} />
    </Switch>
  </HashRouter>
);

export { Router };
