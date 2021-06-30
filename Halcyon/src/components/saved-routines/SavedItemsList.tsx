import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {icons, SIZES} from '../../../constants';

const data = Array(12)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    title: `Yoga Routine ${i + 1}`,
    iconUrl: null,
  }));

const SavedItemsList = () => {
  return (
    <View style={styles.table}>
      <FlatList
        data={data}
        renderItem={({item}) => <SavedItemRow {...item} />}
      />
    </View>
  );
};

type TSavedItemRow = {
  title: string;
};

// TODO show icon using icon URL
const SavedItemRow = ({title}: TSavedItemRow) => {
  return (
    <View style={styles.rowStyle}>
      <Image source={icons.lotusFlower} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '100%',
  },
  rowStyle: {
    height: 100,
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'pink',
    borderWidth: 3,
    margin: 6,
    borderRadius: 22,
  },
  imageStyle: {
    height: SIZES.tableRowHeight - SIZES.tableRowPadding,
    width: SIZES.tableRowHeight - SIZES.tableRowPadding,
    borderRadius: SIZES.tableRowHeight - SIZES.tableRowPadding,
  },
  textStyle: {
    paddingHorizontal: SIZES.padding,
    fontSize: 18,
  },
});

export default SavedItemsList;
