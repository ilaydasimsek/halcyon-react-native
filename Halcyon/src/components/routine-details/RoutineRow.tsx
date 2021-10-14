import {Text} from 'react-native';
import React from 'react';
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
