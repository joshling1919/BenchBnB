import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
     RootReducer,
     preloadedState,
     RootMiddleware
   )
);

export default configureStore;
