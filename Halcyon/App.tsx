import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
