import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {icons, images} from '../../../constants';
import {colors, typography, SIZES} from '../../style';
import {ListRow} from '../common';

type TSavedItemRow = {
  title: string;
  onPress: () => void;
};

// TODO show icon using icon URL
const SavedItemRow: React.FC<TSavedItemRow> = ({title, onPress}) => {
  return (
    <ListRow onPress={onPress}>
      <Image source={images.mandala} style={styles.image} />
      <RowDetails title={title} />
      <Image source={icons.next} style={styles.nextIcon} />
    </ListRow>
  );
};

type TRowDetails = {
  title: string;
};

const RowDetails: React.FC<TRowDetails> = ({title}) => {
  return (
    <View style={styles.details}>
      <Text style={typography.subheading1}>{title}</Text>
      <Text style={typography.lightGrayBody1}>18:06</Text>
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
    height: 24,
    width: 24,
    marginRight: 8,
    tintColor: colors.primary,
  },
  details: {
    flex: 1,
  },
});

export default SavedItemRow;
