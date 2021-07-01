import React from 'react';
import {Text, Animated, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../style';

type THeader = {
  title: string;
  animatedValue: Animated.Value;
};

const AnimatableHeader: React.FC<THeader> = ({title, animatedValue}) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, SIZES.headerFullHeight + insets.top],
    outputRange: [
      SIZES.headerFullHeight + insets.top,
      insets.top + SIZES.headerBaseHeight,
    ],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={{...styles.main, height: headerHeight}}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
  },
  text: {
    color: COLORS.ivory,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AnimatableHeader;
