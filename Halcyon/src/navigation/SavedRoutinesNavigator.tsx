import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getScreenTitle} from '../utils/ScreenUtil';
import {SavedRoutines} from '../components';
import {ScreenName} from '../../constants';

const Stack = createStackNavigator();

const SavedRoutinesNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={ScreenName.SAVED_ROUTINES}
        component={SavedRoutines}
        options={{title: getScreenTitle(ScreenName.SAVED_ROUTINES)}}
      />
    </Stack.Navigator>
  );
};

export default SavedRoutinesNavigator;
