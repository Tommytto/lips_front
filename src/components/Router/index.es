import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from 'src/containers/App/index';
import MainPageContainer from 'src/containers/MainPageContainer/index';

export default function Router () {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/:module/:page/:type/:id" component={App} />
            <Route exact path="/:module/:page/:type" component={App} />
            <Route exact path="/:module/:page" component={App} />
            <Route exact path="/:module" component={App} />
            <Route component={MainPageContainer} />
        </Switch>
    </BrowserRouter>;
}