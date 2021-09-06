import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useRef,
} from 'react';
import {Animated} from 'react-native';
import DraggableRow from "./DraggableRow";

type TObjectWithKey = {key: number | string};

type TDraggableList<T extends TObjectWithKey> = {
  data: T[];
  onChange: (data: T[]) => void;
  getListRow: (params: RenderItemParams<T>) => ReactElement;
};

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

function DraggableList<T extends TObjectWithKey>({
  data,
  onChange,
  getListRow,
}: PropsWithChildren<TDraggableList<T>>) {
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const renderItem = useCallback(
    ({item, drag, isActive}: RenderItemParams<T>) => {
      return (
        <DraggableRow
          isActive={isActive}
          scaleAnimation={scaleAnimation}
          onDrag={drag}>
          {getListRow({item, drag, isActive})}
        </DraggableRow>
      );
    },
    [getListRow, scaleAnimation],
  );

  return (
    <DraggableFlatList<T>
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
        onChange(newData);
        reset(scaleAnimation);
      }}
    />
  );
}

export default DraggableList;
