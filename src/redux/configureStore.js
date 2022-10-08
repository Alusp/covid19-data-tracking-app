import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import CountryReducer from './countries/Coountry';

const rootReducer = combineReducers({
  CountryReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
