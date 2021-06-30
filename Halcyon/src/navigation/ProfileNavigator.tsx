import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreen} from '../../constants';
import {getScreenTitle} from '../utils/ScreenUtil';
import {Profile} from '../components';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  const screenType: TScreen = 'Profile';
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenType}
        component={Profile}
        options={{title: getScreenTitle(screenType)}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
