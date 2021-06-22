import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

const Favorites = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default Favorites;
