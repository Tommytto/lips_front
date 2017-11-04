import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import 'src/common/style/main.less'

import Router from './components/Router/index';
import configureStore from 'src/common/configure-store';
import {getCourseList} from 'src/common/actions/course-list';
import CommonApi from 'src/common/api/index';
import reducers from './reducers/index';

const isProduction = process.env.NODE_ENV === 'production';
const host = '';
const api = new CommonApi(host);
const store = configureStore(!isProduction, reducers, {api});

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/Router/index', () => {
        const HotRouter = require('./components/Router/index').default;

        render(
            <Provider store={store}>
                <HotRouter />
            </Provider>,
            document.getElementById('root')
        );
    });

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
    });
}

store.dispatch(getCourseList(0, 10));