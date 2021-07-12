import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {colors} from '../../style';
import RoutineRow from './RoutineRow';
import {TRoutine} from '../../models';

const exampleData: TRoutine[] = [...Array(20)].map((_, i) => ({
  key: i + 1,
  title: 'Downward facing dog',
}));

const scale = (value: Animated.Value, toValue: number) => {
  Animated.timing(value, {
    useNativeDriver: false,
    toValue: toValue,
    duration: 300,
  }).start();
};

const reset = (value: Animated.Value) => {
  value.setValue(1);
};

const RoutinesList: React.FC = () => {
  const [data, setData] = useState(exampleData);

  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const renderItem = useCallback(
    ({item, drag, isActive}: RenderItemParams<TRoutine>) => {
      return (
        <RoutineRow
          data={item}
          onDrag={drag}
          isActive={isActive}
          scaleAnimation={scaleAnimation}
        />
      );
    },
    [scaleAnimation],
  );

  return (
    <View style={styles.main}>
      <DraggableFlatList<TRoutine>
        data={data}
        renderItem={renderItem}
        onDragBegin={() => {
          scale(scaleAnimation, 1.04);
        }}
        onRelease={() => {
          scale(scaleAnimation, 1);
        }}
        keyExtractor={item => `draggable-item-${item.key}`}
        onDragEnd={({data: newData}) => {
          setData(newData);
          reset(scaleAnimation);
        }}
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
  dragButton: {
    tintColor: colors.gray,
    width: 25,
    height: 60,
  },
});

export default RoutinesList;
