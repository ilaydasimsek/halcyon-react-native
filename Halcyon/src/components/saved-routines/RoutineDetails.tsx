import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

type TRouteProps = {
  RoutineDetails: {
    id: number;
  };
};

const RoutineDetails: React.FC = () => {
  const route = useRoute<RouteProp<TRouteProps, 'RoutineDetails'>>();
  return (
    <View style={styles.screen}>
      <Text>{`Screen with id ${route.params.id}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default RoutineDetails;
