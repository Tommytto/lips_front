import {storeReducers} from './reducers.es';

import {
    configureStore,
    CourseList as CourseListApi
} from 'src/common/index.es';

const isProduction = process.env.NODE_ENV === 'production';
const store = configureStore(!isProduction, storeReducers, {
    'CourseList': new CourseListApi(),
});

export {
    store,
};