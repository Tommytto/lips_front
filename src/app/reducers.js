import { EXAMPLE_MODULE_NAME } from 'example/constants/config';
import { exampleReducers } from 'example/reducers';
import { MODAL_MODULE_NAME } from 'modal/constants/config';
import { combineReducers } from 'redux';
import { modalReducers } from '../modal/reducers';

const storeReducers = combineReducers({
  [MODAL_MODULE_NAME]: modalReducers,
  [EXAMPLE_MODULE_NAME]: exampleReducers,
});

export { storeReducers };
