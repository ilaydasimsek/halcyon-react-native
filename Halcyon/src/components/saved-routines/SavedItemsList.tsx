import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {ScreenName} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import SavedItemRow from './SavedItemRow';

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
  const navigation = useNavigation();
  const onRowPress = (id: number) => {
    navigation.navigate(ScreenName.ROUTINE_DETAILS, {id: id});
  };

  return (
    <View style={styles.main}>
      <Animated.FlatList
        data={data}
        renderItem={({item}) => (
          <SavedItemRow {...item} onPress={() => onRowPress(item.id)} />
        )}
        style={styles.table}
        contentContainerStyle={styles.table}
        onScroll={onScroll}
      />
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
});

export default SavedItemsList;
