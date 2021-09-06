import {ScreenName} from '../../constants';

export const getScreenTitle = (screenType: ScreenName) => {
  switch (screenType) {
    case ScreenName.SAVED_ROUTINES:
      return 'Saved Routines';
    case ScreenName.PROFILE:
      return 'Profile';
    case ScreenName.ROUTINE_DETAILS:
      return 'Details';
    default:
      return '';
  }
};
