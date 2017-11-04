import {combineReducers} from 'redux';

import modal from './modal';
import * as commonReducers from 'src/common/reducers/index';

const {courseList} = commonReducers;

export default combineReducers({
    modal,
    courseList,
});