import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ScreenName} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {ListRow} from '../common';

type TData = {
  id: number;
  title: string;
  iconUrl?: string;
};
const data: TData[] = [...Array(20)].map((_, i) => ({
  id: i + 1,
  title: 'Downward facing dog',
}));

const RoutinesList: React.FC = () => {
  const navigation = useNavigation();
  const onRowPress = (title: string, id: number) => {
    navigation.navigate(ScreenName.ROUTINE_DETAILS, {title, id});
  };

  return (
    <View style={styles.main}>
      <FlatList<TData>
        data={data}
        renderItem={({item}: {item: TData}) => (
          <RoutineRow
            title={item.title}
            onPress={() => {
              onRowPress(item.title, item.id);
            }}
          />
        )}
        style={styles.table}
        contentContainerStyle={styles.table}
      />
    </View>
  );
};

type TRoutinesList = {
  title: string;
  onPress: () => void;
};

const RoutineRow: React.FC<TRoutinesList> = ({title, onPress}) => {
  return (
    <ListRow onPress={onPress}>
      <Text>{title}</Text>
    </ListRow>
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

export default RoutinesList;
