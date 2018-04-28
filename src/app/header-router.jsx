import { GuestHeaderContainer } from 'common/containers/GuestHeaderContainer';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const HeaderRouter = () => (
  <Switch>
    <Route component={GuestHeaderContainer} />
  </Switch>
);

export { HeaderRouter };
