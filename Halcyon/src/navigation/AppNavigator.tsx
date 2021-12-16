import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {ScreenName} from '../../constants';
import {RoutineDetails} from '../components';

const Stack = createStackNavigator();

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator"
      screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name={ScreenName.ROUTINE_DETAILS}
        component={RoutineDetails}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
