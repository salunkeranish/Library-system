import { createStore } from 'redux';
import bookReducer from './reducers';

// Create Redux store
const store = createStore(bookReducer);

export default store;
