import {
  fetchTempError,
  fetchTempLoading,
  fetchTempSuccess,
} from '../store/Temp';
import {api} from './index';
import handleError from './ErrorHandler';
import {API} from '../../constants';

export const getTempScreen = () => async dispatch => {
  dispatch(fetchTempLoading());
  try {
    await sleep(2000);
    // const {data} = await api.get(`${API.TEMP}`);
    const data = {result: 'works correctly'};
    dispatch(fetchTempSuccess(data));
    return data;
  } catch (err) {
    const error = handleError(err);
    dispatch(fetchTempError({error}));
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
