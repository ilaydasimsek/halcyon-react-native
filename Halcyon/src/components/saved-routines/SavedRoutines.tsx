import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import SavedItemsList from './SavedItemsList';
import {colors} from '../../style';
import {images} from '../../../constants';
import {BasicHeader} from '../common';

const SavedRoutines: React.FC = () => {
  return (
    <View style={styles.screen}>
      <BasicHeader
        title="Saved Routines"
        backgroundImage={images.floralBackground}
      />
      <SavedItemsList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
  },
});

export default SavedRoutines;
