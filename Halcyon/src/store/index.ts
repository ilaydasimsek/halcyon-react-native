import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import temp from './Temp';

const rootReducer = combineReducers({
  temp,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
