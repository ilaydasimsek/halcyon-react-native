import SCREENS from '../../constants/Screens';
import {Favorites, Profile} from '../components';

export const getScreenTitle = screenType => {
  switch (screenType) {
    case SCREENS.FAVORITES:
      return 'Favorites';
    case SCREENS.PROFILE:
      return 'Profile';
    default:
      return '';
  }
};

export const getScreen = screenType => {
  switch (screenType) {
    case SCREENS.FAVORITES:
      return Favorites;
    case SCREENS.PROFILE:
      return Profile;
    default:
      return null;
  }
};
