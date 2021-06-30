import TScreen from '../../constants/Screens';

export const getScreenTitle = (screenType: TScreen) => {
  switch (screenType) {
    case 'Favorites':
      return 'Favorites';
    case 'Profile':
      return 'Profile';
    default:
      return '';
  }
};
