import * as React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SavedItemsList from './SavedItemsList';
import {colors} from '../../style';
import AnimatableHeader from '../common/AnimatableHeader';
import {useRef} from 'react';
import {images} from '../../../constants';

const SavedRoutines: React.FC = () => {
  const offset: Animated.Value = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.screen}>
      <AnimatableHeader
        title="Saved Routines"
        icon={images.yogaPose}
        backgroundImage={images.floralBackground}
        animatedValue={offset}
      />
      <SavedItemsList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

export default SavedRoutines;
