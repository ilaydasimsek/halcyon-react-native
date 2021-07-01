import {StyleSheet} from 'react-native';
import {colors} from './Colors';

export const FONT_FAMILY = {
  black: 'SourceSansPro-Black',
  bold: 'SourceSansPro-Bold',
  italic: 'SourceSansPro-Italic',
  regular: 'SourceSansPro-Regular',
  semibold: 'SourceSansPro-SemiBold',
};

export const fonts = StyleSheet.create({
  // Light Colored
  LightRegular21: {
    fontSize: 21,
    fontFamily: FONT_FAMILY.regular,
    color: colors.ivory,
  },
  LightBold24: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.bold,
    color: colors.ivory,
  },

  // Dark Colored
  DarkRegular18: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.regular,
    color: colors.darkGray,
    letterSpacing: 0.34,
  },
  DarkRegular21: {
    fontSize: 21,
    fontFamily: FONT_FAMILY.regular,
    color: colors.darkGray,
  },
  DarkSemibold18: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.semibold,
    color: colors.darkGray,
  },
  DarkBold24: {fontSize: 24, fontFamily: FONT_FAMILY.bold, color: colors.black},
  // Light Gray
  LightGrayRegular14: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: colors.lightGray,
  },
});
