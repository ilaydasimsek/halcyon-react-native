/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {Provider} from 'react-redux';
import store from './src/store';
import {AppNavigator} from './src/navigation';
import {StatusBar} from 'react-native';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
