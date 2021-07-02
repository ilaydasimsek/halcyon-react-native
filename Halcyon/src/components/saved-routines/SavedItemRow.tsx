import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons, images} from '../../../constants';
import {colors, fonts, layout, shadow, SIZES} from '../../style';

type TSavedItemRow = {
  title: string;
  onPress: () => void;
};

// TODO show icon using icon URL
const SavedItemRow: React.FC<TSavedItemRow> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[layout.tableRow, shadow.low]}>
        <Image source={images.mandala} style={styles.image} />
        <RowDetails title={title} />
        <Image source={icons.next} style={styles.nextIcon} />
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
  image: {
    height: SIZES.tableRowHeight - SIZES.tableRowPadding - 20,
    width: SIZES.tableRowHeight - SIZES.tableRowPadding - 20,
    borderRadius: SIZES.tableRowHeight - SIZES.tableRowPadding,
    marginRight: 12,
  },
  nextIcon: {
    height: 28,
    width: 28,
    marginRight: 8,
    tintColor: colors.primary,
  },
  details: {
    flex: 1,
  },
});

export default SavedItemRow;
