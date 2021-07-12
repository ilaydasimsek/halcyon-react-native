type TSliceState<T> = {
  error?: {
    message: string;
    status: string;
  };
  isLoading: boolean;
  data?: T;
};

export default TSliceState;
