import { HelloComponent } from 'auth/components/HelloComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Router = () => (
  <Switch>
    <Route component={HelloComponent} />
  </Switch>
);

export { Router };
