import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreen} from '../../constants';
import {getScreenTitle} from '../utils/ScreenUtil';
import {Favorites} from '../components';

const Stack = createStackNavigator();

const FavoritesNavigator: React.FC = () => {
  const screenType: TScreen = 'Favorites';
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenType}
        component={Favorites}
        options={{title: getScreenTitle('Favorites')}}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
