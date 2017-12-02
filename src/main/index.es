import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {getCourseList} from 'src/common/index.es';
import {storeReducers} from './reducers.es';
import 'src/common/style/main.less'

import {Router} from './router.es';
import {store} from './store.es';

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./router.es', () => {
        const HotRouter = require('./router.es').default;

        render(
            <Provider store={store}>
                <HotRouter />
            </Provider>,
            document.getElementById('root')
        );
    });

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers.es', () => {
        const nextReducer = require('./reducers.es').default;
        store.replaceReducer(nextReducer);
    });
}

store.dispatch(getCourseList(0, 10));