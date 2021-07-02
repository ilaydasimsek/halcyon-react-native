import {StyleSheet} from 'react-native';
import {colors} from './Colors';
import {SIZES} from './Sizes';

export const layout = StyleSheet.create({
  tableRow: {
    height: SIZES.tableRowHeight,
    paddingHorizontal: SIZES.tableRowPadding,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    marginHorizontal: 12,
    borderRadius: 18,
    backgroundColor: colors.ivory,
  },
});

export const shadow = StyleSheet.create({
  low: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
  medium: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  high: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
