import React, {useEffect, useMemo, useState} from 'react';
import {
  Text,
  Animated,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, layout, SIZES, typography} from '../../style';
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
    <Animated.View style={{...layout.main.main, height: headerHeight}}>
      {backgroundImage && (
        <Image
          source={images.floralBackground}
          style={layout.main.background}
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
      <Text style={[typography.lightHeading2, styles.text]}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    paddingBottom: 22,
  },
});

export default AnimatableHeader;
