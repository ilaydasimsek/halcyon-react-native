import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TError} from "../networking/ErrorHandler";

type DataType = {
  result: string;
} | null;
type SliceType = {
  error: {
    message: string;
    status: string;
  } | null;
  isLoading: boolean;
  data: DataType;
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
    fetchTempSuccess: (state, action: PayloadAction<DataType>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchTempLoading: state => {
      state.isLoading = true;
    },
    fetchTempError: (state, action: PayloadAction<TError>) => {
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export const {fetchTempSuccess, fetchTempLoading, fetchTempError} =
  slice.actions;
export default slice.reducer;
