const {createSlice} = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'temp',
  initialState: {
    error: null,
    isLoading: false,
    data: {},
  },
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
