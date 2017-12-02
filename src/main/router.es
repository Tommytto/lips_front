import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {MainPageContainer} from 'src/guest/index.es';
import {Router as TeachingRouter} from 'src/teaching/index.es';

const Router = () => {
    return <HashRouter>
        <Switch>
            <Route path="/teaching" component={TeachingRouter} />
            <Route component={MainPageContainer} />
        </Switch>
    </HashRouter>;
};

export {
    Router,
};