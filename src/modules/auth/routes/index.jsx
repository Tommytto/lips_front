// @flow
import React from 'react';
import loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import {Preloader} from '../components/Preloader';

const LoadableMain = loadable({
    loader: () => import('./MainRoute').then(({ MainRoute }) => MainRoute),
    loading: Preloader,
});

const Loadable404 = loadable({
    loader: () =>
        import('./NoMatchRouter').then(({ NoMatchRouter }) => NoMatchRouter),
    loading: Preloader,
});

function AuthRouter() (
    return (
        <Switch>
            <Route exact path="/" component={LoadableMain} />
            <Route component={Loadable404} />
        </Switch>
    )
);

export { AuthRouter };
