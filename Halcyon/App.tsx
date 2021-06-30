import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/components/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <BottomTabNavigator />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
