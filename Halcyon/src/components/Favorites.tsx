import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Favorites: React.FC = () => {
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
