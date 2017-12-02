import {combineReducers} from 'redux';

import {
    reducers as commonReducers,
    MODULE_NAME as COMMON_MODULE_NAME,
} from 'src/common/index.es';

import {
    reducers as modalReducers,
    MODULE_NAME as MODAL_MODULE_NAME
} from 'src/modal/index.es';

const storeReducers = combineReducers({
    [COMMON_MODULE_NAME]: commonReducers,
    [MODAL_MODULE_NAME]: modalReducers,
});

export {
    storeReducers,
};