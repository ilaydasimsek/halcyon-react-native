import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../../constants';
import {getScreen, getScreenTitle} from '../utils/ScreenUtil';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  const screenType = SCREENS.PROFILE;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenType}
        component={getScreen(screenType)}
        options={{title: getScreenTitle(screenType)}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
