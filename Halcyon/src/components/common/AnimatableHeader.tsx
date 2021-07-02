import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  Animated,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, SIZES, typography} from '../../style';
import {images} from '../../../constants';

type THeader = {
  title: string;
  icon: ImageSourcePropType;
  backgroundImage?: ImageSourcePropType;
  animatedValue: Animated.Value;
};

const AnimatableHeader: React.FC<THeader> = ({
  title,
  icon,
  backgroundImage,
  animatedValue,
}) => {
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
      {backgroundImage && (
        <Image
          source={images.floralBackground}
          style={{
            ...styles.backgroundImage,
          }}
        />
      )}
      <Image
        source={icon}
        style={{
          ...styles.image,
          marginTop: insets.top,
          display: defaultHeightReached ? 'none' : 'flex',
        }}
      />
      <Text style={[typography.lightHeading1, styles.text]}>{title}</Text>
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
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 18,
    top: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    paddingBottom: 22,
  },
});

export default AnimatableHeader;
