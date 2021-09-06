import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ListRow} from '../common';
import {icons} from '../../../constants';
import {colors, layout, shadow} from '../../style';
import {TRoutine} from '../../models';

type TRoutineRowProps = {
  data: TRoutine;
  onPress?: () => void;
  onDrag: () => void;
  isActive: boolean;
  scaleAnimation: Animated.Value | number;
};

const RoutineRow: React.FC<TRoutineRowProps> = ({
  data,
  onPress,
  onDrag,
  isActive,
  scaleAnimation,
}) => {
  return (
    <Animated.View style={isActive && {transform: [{scale: scaleAnimation}]}}>
      <ListRow onPress={onPress} style={[styles.row]}>
        <Text>
          {data.title} {data.key}
        </Text>
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
  row: {
    justifyContent: 'space-between',
  },
  activeDrag: {
    ...shadow.medium,
    ...layout.table.draggedRow,
  },
});

export default RoutineRow;
