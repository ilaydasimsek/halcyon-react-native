import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getScreenTitle} from '../utils/ScreenUtil';
import {Profile} from '../components';
import {ScreenName} from '../../constants';

const Stack = createStackNavigator();

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.PROFILE}
        component={Profile}
        options={{title: getScreenTitle(ScreenName.PROFILE)}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
