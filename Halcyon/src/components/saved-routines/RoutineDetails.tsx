import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BasicHeader} from '../common';
import {images} from '../../../constants';
import SavedItemsList from './SavedItemsList';

type TRoutineDetails = {
  title: string;
};

const RoutineDetails: React.FC<TRoutineDetails> = ({title}) => {
  return (
    <View style={{...styles.screen, backgroundColor: 'pink'}}>
      <BasicHeader title={title} backgroundImage={images.floralBackground} />
      <SavedItemsList onScroll={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    paddingVertical: 12,
  },
});

export default RoutineDetails;
