import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SavedRoutines} from '../components';
import {ScreenName} from '../../constants';
import RoutineDetails from '../components/saved-routines/RoutineDetails';

const Stack = createStackNavigator();

const SavedRoutinesNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={ScreenName.SAVED_ROUTINES}
        component={SavedRoutines}
      />
      <Stack.Screen
        name={ScreenName.ROUTINE_DETAILS}
        component={RoutineDetails}
      />
    </Stack.Navigator>
  );
};

export default SavedRoutinesNavigator;
