import React from 'react';
import {Text, StyleSheet, Image, ImageSourcePropType, View} from 'react-native';
import {colors, layout, SIZES, typography} from '../../style';
import {images} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type THeader = {
  title: string;
  backgroundImage?: ImageSourcePropType;
};

const BasicHeader: React.FC<THeader> = ({title, backgroundImage}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{...layout.header, height: SIZES.headerBaseHeight + insets.top}}>
      {backgroundImage && (
        <Image
          source={images.floralBackground}
          style={{
            ...styles.backgroundImage,
          }}
        />
      )}
      <Text style={[typography.lightHeading2, styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: SIZES.borderRadius,
    top: 0,
  },
  text: {
    paddingBottom: 20,
  },
});

export default BasicHeader;
