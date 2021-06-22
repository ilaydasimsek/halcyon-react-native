import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import temp from './Temp';

const rootReducer = combineReducers({
  temp,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export default store;
