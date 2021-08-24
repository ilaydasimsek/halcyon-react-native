import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TError} from '../networking/ErrorHandler';
import {TRoutines} from '../models';
import {TSliceState} from './common';

const initialState: TSliceState<TRoutines> = {
  isLoading: false,
};

const slice = createSlice({
  name: 'routines',
  initialState: initialState,
  reducers: {
    fetchRoutinesSuccess: (state, action: PayloadAction<TRoutines>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchRoutinesLoading: state => {
      state.isLoading = true;
    },
    fetchRoutinesError: (state, action: PayloadAction<TError>) => {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const {fetchRoutinesSuccess, fetchRoutinesLoading, fetchRoutinesError} =
  slice.actions;
export default slice.reducer;
