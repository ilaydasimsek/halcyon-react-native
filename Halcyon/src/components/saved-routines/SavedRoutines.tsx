import * as React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SavedItemsList from './SavedItemsList';
import {COLORS} from '../../style';
import AnimatableHeader from '../common/AnimatableHeader';
import {useRef} from 'react';

const SavedRoutines: React.FC = () => {
  const offset: Animated.Value = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.screen}>
      <AnimatableHeader title="Saved Routines" animatedValue={offset} />
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
    backgroundColor: COLORS.background,
  },
});

export default SavedRoutines;
