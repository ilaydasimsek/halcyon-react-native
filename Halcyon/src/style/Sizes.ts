import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  borderRadius: 8,

  // app dimensions
  width,
  height,

  // table dimensions
  tableRowHeight: 85,
  tableRowPadding: 10,

  // header
  headerBaseHeight: 60,
  headerFullHeight: 150,
};
