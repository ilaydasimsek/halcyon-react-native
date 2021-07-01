import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../constants';
import {colors, fonts, layout, SIZES} from '../../style';

type TSavedItemRow = {
  title: string;
  onPress: () => void;
};

// TODO show icon using icon URL
const SavedItemRow: React.FC<TSavedItemRow> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.row, layout.lowShadow]}>
        <Image source={images.mandala} style={styles.image} />
        <RowDetails title={title} />
      </View>
    </TouchableOpacity>
  );
};

type TRowDetails = {
  title: string;
};

const RowDetails: React.FC<TRowDetails> = ({title}) => {
  return (
    <View style={styles.details}>
      <Text style={fonts.DarkSemibold18}>{title}</Text>
      <Text style={fonts.LightGrayRegular14}>18:06</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: SIZES.tableRowHeight,
    paddingHorizontal: SIZES.tableRowPadding,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    marginHorizontal: 12,
    borderRadius: 18,
    backgroundColor: colors.ivory,
  },
  image: {
    height: SIZES.tableRowHeight - SIZES.tableRowPadding - 20,
    width: SIZES.tableRowHeight - SIZES.tableRowPadding - 20,
    borderRadius: SIZES.tableRowHeight - SIZES.tableRowPadding,
    marginRight: 12,
  },
  details: {},
});

export default SavedItemRow;
