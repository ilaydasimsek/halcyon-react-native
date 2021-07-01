import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {icons} from '../../../constants';
import {COLORS, SIZES} from '../../style';

const data = Array(12)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    title: `Yoga Routine ${i + 1}`,
    iconUrl: null,
  }));

type TSavedItemsList = {
  onScroll: () => any;
};

const SavedItemsList: React.FC<TSavedItemsList> = ({onScroll}) => {
  return (
    <View style={styles.main}>
      <Animated.FlatList
        data={data}
        renderItem={({item}) => <SavedItemRow {...item} />}
        style={styles.table}
        contentContainerStyle={styles.table}
        onScroll={onScroll}
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
  main: {
    flex: 1,
    width: '100%',
    paddingBottom: 0,
  },
  table: {
    paddingTop: 4,
    paddingBottom: 12,
  },
  rowStyle: {
    height: SIZES.tableRowHeight,
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    borderRadius: 18,
    backgroundColor: COLORS.ivory,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
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
