import React from 'react';
import {Text, StyleSheet, Image, ImageSourcePropType, View} from 'react-native';
import {layout, SIZES, typography} from '../../style';
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
      style={[
        layout.header.main,
        {height: SIZES.headerBaseHeight + insets.top},
      ]}>
      {backgroundImage && (
        <Image
          source={images.floralBackground}
          style={layout.header.background}
        />
      )}
      <Text style={[typography.lightHeading2, styles.text]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: SIZES.headerBaseHeight,
  },
});

export default BasicHeader;
