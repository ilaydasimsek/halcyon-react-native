import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListRow} from '../common';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {TouchableHighlight} from 'react-native';
import {icons} from '../../../constants';
import {colors, layout, shadow} from '../../style';

type TData = {
  key: number;
  title: string;
  iconUrl?: string;
};
const exampleData: TData[] = [...Array(20)].map((_, i) => ({
  key: i + 1,
  title: 'Downward facing dog',
}));

const RoutinesList: React.FC = () => {
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({item, drag, isActive}: RenderItemParams<TData>) => {
      return <RoutineRow data={item} onDrag={drag} isActive={isActive} />;
    },
    [],
  );

  return (
    <View style={styles.main}>
      <DraggableFlatList<TData>
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `draggable-item-${item.key}`}
        onDragEnd={({data: newData}) => setData(newData)}
      />
    </View>
  );
};

type TRoutinesList = {
  data: TData;
  onPress?: () => void;
  onDrag: () => void;
  isActive: boolean;
};

const RoutineRow: React.FC<TRoutinesList> = ({
  data,
  onPress,
  onDrag,
  isActive,
}) => {
  return (
    <ListRow
      onPress={onPress}
      style={[styles.row, isActive && styles.activeDrag]}>
      <Text>
        {data.title} {data.key}
      </Text>
      <TouchableHighlight onPressIn={onDrag} style={styles.dragButton}>
        <Image source={icons.drag} style={styles.dragButton} />
      </TouchableHighlight>
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
  dragButton: {
    tintColor: colors.gray,
    width: 25,
    height: 60,
  },
  row: {
    justifyContent: 'space-between',
  },
  activeDrag: {
    ...shadow.medium,
    ...layout.table.draggedRow,
  },
});

export default RoutinesList;
