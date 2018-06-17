// @flow
import thunk from "redux-thunk";
import { rootReducer } from "reducers";
import { makeStore } from "./makeStore";

const isProd = "production" === process.env.NODE_ENV;

function getAppStore() {
  const extraArgs = {};
  const middlewares = [thunk.withExtraArgument(extraArgs)];

  return makeStore({
    debug: !isProd,
    middlewares,
    reducer: rootReducer
  });
}

export { getAppStore };
