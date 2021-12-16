import {Animated, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ListRow} from '../index';
import {icons} from '../../../../constants';
import {colors, layout, shadow} from '../../../style';

type TDraggableRow = {
  isActive: boolean;
  scaleAnimation: Animated.Value | number;
  onDrag: () => void;
  onPress?: () => void;
};

const DraggableRow: React.FC<TDraggableRow> = ({
  isActive,
  scaleAnimation,
  onDrag,
  onPress,
  children,
}) => {
  return (
    <Animated.View style={isActive && {transform: [{scale: scaleAnimation}]}}>
      <ListRow onPress={onPress} style={[styles.row]}>
        {children}
        <TouchableOpacity onPressIn={onDrag} style={styles.dragButton}>
          <Image source={icons.drag} style={styles.dragButton} />
        </TouchableOpacity>
      </ListRow>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dragButton: {
    tintColor: colors.gray,
    width: 25,
    height: 60,
  },
  activeDrag: {
    ...shadow.medium,
    ...layout.table.draggedRow,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default DraggableRow;
