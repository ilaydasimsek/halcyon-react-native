import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  // app dimensions
  width,
  height,

  // table dimensions
  tableRowHeight: 85,
  tableRowPadding: 10,

  // header
  headerBaseHeight: 44,
  headerFullHeight: 150,
};
