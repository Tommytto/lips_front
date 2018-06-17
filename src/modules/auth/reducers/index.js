// @flow
import { combineReducers } from 'redux';
import { authReducer, authModuleName } from './auth';
import { mainReducer } from './main';

const rootReducer = combineReducers({
    [authModuleName]: authReducer,
    main: mainReducer,
});

export { rootReducer };
