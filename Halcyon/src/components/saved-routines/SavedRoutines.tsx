import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import SavedItemsList from './SavedItemsList';

const SavedRoutines: React.FC = () => {
  return (
    <View style={styles.screen}>
      <SavedItemsList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedRoutines;
