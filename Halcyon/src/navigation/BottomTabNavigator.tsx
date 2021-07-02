import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../style';
import {icons, ScreenName} from '../../constants';
import {Profile, SavedRoutines} from '../components';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.navigator,
      }}>
      <Tab.Screen
        name={ScreenName.SAVED_ROUTINES}
        component={SavedRoutines}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconImage icon={icons.star} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={ScreenName.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconImage icon={icons.user} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

type TTabBarIconImageProps = {
  icon: ImageSourcePropType;
  focused: boolean;
};

const TabBarIconImage: React.FC<TTabBarIconImageProps> = ({icon, focused}) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={focused ? styles.focusedTabBarItem : styles.unfocusedTabBarItem}
    />
  );
};

const styles = StyleSheet.create({
  navigator: {
    elevation: 0,
    backgroundColor: colors.ivory,
  },
  focusedTabBarItem: {
    width: 25,
    height: 25,
    tintColor: colors.primary,
  },
  unfocusedTabBarItem: {
    width: 25,
    height: 25,
    tintColor: colors.secondary,
  },
});

export default BottomTabNavigator;
