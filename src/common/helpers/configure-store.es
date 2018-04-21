import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';


function configureStore(enableDevtools = false, reducer, extraArgs) {
  const middlewares = [thunk.withExtraArgument(extraArgs)];

  return createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      enableDevtools && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f,
    ),
  );
}

export { configureStore };
