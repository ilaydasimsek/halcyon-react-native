import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BasicHeader} from '../common';
import {images} from '../../../constants';
import {RouteProp, useRoute} from '@react-navigation/native';
import RoutinesList from './RoutinesList';

type TRouteProps = {
  RoutineDetails: {
    id: number;
    title: string;
  };
};

const RoutineDetails: React.FC = () => {
  const route = useRoute<RouteProp<TRouteProps, 'RoutineDetails'>>();
  return (
    <View style={styles.screen}>
      <BasicHeader
        title={route.params.title}
        backgroundImage={images.floralBackground}
      />
      <RoutinesList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
  },
});

export default RoutineDetails;
