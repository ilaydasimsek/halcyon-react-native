import {ScreenName} from '../../constants';

export const getScreenTitle = (screenType: ScreenName) => {
  switch (screenType) {
    case ScreenName.SAVED_ROUTINES:
      return 'Saved Routines';
    case ScreenName.PROFILE:
      return 'Profile';
    default:
      return '';
  }
};
