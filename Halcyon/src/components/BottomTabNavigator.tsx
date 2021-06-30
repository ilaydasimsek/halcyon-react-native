import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS, NAVIGATORS, icons} from '../../constants';
import {FavoritesNavigator, ProfileNavigator} from '../navigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.navigator,
      }}>
      <Tab.Screen
        name={NAVIGATORS.FAVORITES}
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconImage icon={icons.star} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name={NAVIGATORS.PROFILE}
        component={ProfileNavigator}
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
  },
  focusedTabBarItem: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
  unfocusedTabBarItem: {
    width: 25,
    height: 25,
    tintColor: COLORS.secondary,
  },
});

export default BottomTabNavigator;
