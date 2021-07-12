type TRoutine = {
  key: number;
  title: string;
  iconUrl?: string;
};

type TRoutines = {
  routines: TRoutine[];
};

export {TRoutine, TRoutines};
