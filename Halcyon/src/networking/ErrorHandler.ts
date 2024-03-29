import {AxiosError} from 'axios';

export type TError = {
  error: {
    message: string;
    status: string;
  };
};

const handleError = (err: AxiosError): TError => {
  let message = '';
  let status;
  if (err.response) {
    // error from API
    status = err.response.data?.status;
  }

  if (err.request && !err.response) {
    // a network error
    if (err.request._response.indexOf('internet') !== -1) {
      message = err.request._response;
    }
  }

  message = 'Something went wrong. Please try again';

  return {
    error: {
      message,
      status,
    },
  };
};

export default handleError;
