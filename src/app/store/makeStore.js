// @flow
import { applyMiddleware, compose, createStore } from 'redux';

type StoreArgs = {
    debug: boolean,
    initialState?: Object,
    middlewares: [Function],
    reducer: [Function],
};

function makeStore({ debug, initialState, middlewares, reducer }: StoreArgs) {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            debug && window.devToolsExtension
                ? window.devToolsExtension()
                : (f) => f
        )
    );
}

export { makeStore };
