import {
  fetchTempError,
  fetchTempLoading,
  fetchTempSuccess,
} from '../store/Temp';
import handleError from './ErrorHandler';
import {AppThunk} from '../store';
import axios from 'axios';

export const getTempScreen = (): AppThunk<void> => async dispatch => {
  dispatch(fetchTempLoading());
  try {
    await sleep(2000);
    // const {data} = await api.get(`${API.TEMP}`);
    const data = {result: 'works correctly'};
    dispatch(fetchTempSuccess(data));
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const error = handleError(err);
      dispatch(fetchTempError(error));
    } else {
      // TODO handle generic error
    }
  }
};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
