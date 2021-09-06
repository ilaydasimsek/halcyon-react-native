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
};

const RoutineRow: React.FC<TRoutineRowProps> = ({data}) => {
  return (
    <Text>
      {data.title} {data.key}
    </Text>
  );
};

export default RoutineRow;
