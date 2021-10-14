import {StyleSheet} from 'react-native';
import {colors} from './Colors';
import {SIZES} from './Sizes';

const tableLayout = StyleSheet.create({
  row: {
    height: SIZES.tableRowHeight,
    paddingHorizontal: SIZES.tableRowPadding,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    marginHorizontal: 12,
    borderRadius: SIZES.borderRadius,
    backgroundColor: colors.ivory,
  },
  draggedRow: {
    height: SIZES.tableRowHeight + 2,
    marginHorizontal: 10,
  },
});

const headerLayout = StyleSheet.create({
  main: {
    width: '100%',
    zIndex: 10,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
  button: {
    tintColor: colors.ivory,
    width: SIZES.headerBaseHeight / 2,
    height: SIZES.headerBaseHeight / 2,
  },
});

export const layout = {
  table: tableLayout,
  header: headerLayout,
};

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
