import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  Animated,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, SIZES, fonts} from '../../style';

type THeader = {
  title: string;
  icon: ImageSourcePropType;
  animatedValue: Animated.Value;
};

const AnimatableHeader: React.FC<THeader> = ({title, icon, animatedValue}) => {
  const insets = useSafeAreaInsets();
  const [defaultHeightReached, setDefaultHeightReached] = useState(false);

  const headerHeight = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, SIZES.headerFullHeight + insets.top],
        outputRange: [
          SIZES.headerFullHeight + insets.top,
          insets.top + SIZES.headerBaseHeight,
        ],
        extrapolate: 'clamp',
      }),
    [animatedValue, insets],
  );

  useEffect(() => {
    const id = headerHeight.addListener(({value}) => {
      const defaultHeight = insets.top + SIZES.headerBaseHeight;
      if (value <= defaultHeight) {
        setDefaultHeightReached(true);
      } else if (value >= defaultHeight) {
        setDefaultHeightReached(false);
      }
    });
    return () => headerHeight.removeListener(id);
  }, [headerHeight, insets]);

  return (
    <Animated.View style={{...styles.main, height: headerHeight}}>
      <Image
        source={icon}
        style={{
          ...styles.image,
          marginTop: insets.top,
          display: defaultHeightReached ? 'none' : 'flex',
        }}
      />
      <Text style={fonts.LightBold24}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    top: 0,
    zIndex: 10,
    backgroundColor: colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 18,
    paddingBottom: 8,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default AnimatableHeader;
