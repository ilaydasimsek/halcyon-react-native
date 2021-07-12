import {
  fetchRoutinesError,
  fetchRoutinesLoading,
  fetchRoutinesSuccess,
} from '../store/Routines';
import handleError from './ErrorHandler';
import {AppThunk} from '../store';
import axios from 'axios';
import {TRoutine, TRoutines} from '../models';

const routinesList: TRoutine[] = Array(12)
  .fill(0)
  .map((_, i) => ({
    key: i + 1,
    title: `Yoga Routine ${i + 1}`,
  }));

const data: TRoutines = {
  routines: routinesList,
};

export const fetchRoutines = (): AppThunk<void> => async dispatch => {
  dispatch(fetchRoutinesLoading());
  try {
    await sleep(2000);
    dispatch(fetchRoutinesSuccess(data));
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const error = handleError(err);
      dispatch(fetchRoutinesError(error));
    } else {
      // TODO handle generic error
    }
  }
};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
