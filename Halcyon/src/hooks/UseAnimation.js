import React, {useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = ({
  durationMilliseconds,
  percentage,
  onAnimationProgress,
  ...other
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: 100,
      duration: durationMilliseconds,
      useNativeDriver: true,
      easing: Easing.linear,
      ...other,
    });
    animation.start();
    const id = animatedValue.addListener(({value}) => {
      onAnimationProgress(value);
    });

    return () => animatedValue.removeListener(id);
  }, []);
};

export default useAnimation;
