import React, {ReactElement, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import RoutineRow from './RoutineRow';
import {TRoutine} from '../../models';
import DraggableList from '../common/draggable-table/DraggableList';

const exampleData: TRoutine[] = [...Array(20)].map((_, i) => ({
  key: i + 1,
  title: 'Downward facing dog',
}));

const RoutinesList: React.FC = () => {
  const [data, setData] = useState(exampleData);
  function getListRow({item}: RenderItemParams<TRoutine>): ReactElement {
    return <RoutineRow data={item} />;
  }
  return (
    <View style={styles.main}>
      <DraggableList data={data} onChange={setData} getListRow={getListRow} />
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

export default RoutinesList;
