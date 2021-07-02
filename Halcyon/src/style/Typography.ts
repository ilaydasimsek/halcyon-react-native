import {StyleSheet} from 'react-native';
import {colors} from './index';

const FONT_FAMILY = {
  black: 'SourceSansPro-Black',
  bold: 'SourceSansPro-Bold',
  italic: 'SourceSansPro-Italic',
  regular: 'SourceSansPro-Regular',
  semibold: 'SourceSansPro-SemiBold',
};

const FONT_COLOR = {
  light: colors.ivory,
  dark: colors.darkGray,
  lightGray: colors.gray,
};

export const typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.bold,
    color: FONT_COLOR.dark,
  },
  lightHeading1: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.bold,
    color: FONT_COLOR.light,
  },
  lightHeading2: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.bold,
    color: FONT_COLOR.light,
  },
  heading2: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.semibold,
    color: FONT_COLOR.dark,
  },
  subheading1: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.semibold,
    color: FONT_COLOR.dark,
  },
  subheading2: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.semibold,
    color: FONT_COLOR.dark,
  },
  body1: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: FONT_COLOR.dark,
  },

  // Light Gray
  lightGrayBody1: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: FONT_COLOR.lightGray,
  },
});
