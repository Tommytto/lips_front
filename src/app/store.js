import { configureStore } from 'common/helpers/configure-store.es';
import { storeReducers } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const store = configureStore(!isProduction, storeReducers);

export { store };
