import {createSlice} from '@reduxjs/toolkit';

type SliceType = {
  error: {
    message: string;
    status: string;
  } | null;
  isLoading: boolean;
  data: {
    result: string;
  } | null;
};

const initialState: SliceType = {
  error: null,
  isLoading: false,
  data: null,
};

const slice = createSlice({
  name: 'temp',
  initialState: initialState,
  reducers: {
    fetchTempSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchTempLoading: state => {
      state.isLoading = true;
    },
    fetchTempError: (state, action) => {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const {fetchTempSuccess, fetchTempLoading, fetchTempError} =
  slice.actions;
export default slice.reducer;
