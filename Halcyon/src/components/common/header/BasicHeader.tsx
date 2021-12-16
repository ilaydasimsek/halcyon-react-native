import React from 'react';
import { Text, StyleSheet, Image, ImageSourcePropType, View } from 'react-native';
import { layout, SIZES, typography } from '../../../style';
import { images } from '../../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton';

type THeader = {
  title: string;
  backgroundImage?: ImageSourcePropType;
};

const BasicHeader: React.FC<THeader> = ({ title, backgroundImage }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={[
          layout.header.main,
          { height: SIZES.headerBaseHeight + insets.top },
        ]}>
        {backgroundImage && (
          <Image
            source={images.floralBackground}
            style={layout.header.background}
          />
        )}
        {/* TODO leading buttons other than back button */}
        <View style={layout.header.items}>
          <View style={styles.buttonGroup}>
            {navigation.canGoBack() && <BackButton />}
          </View>
          <Text style={[typography.lightHeading2, styles.text]}>{title}</Text>
          {/* TODO trailing buttons */}
          <View style={[styles.buttonGroup, styles.rightAligned]} />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    flex: 1,
  },
  rightAligned: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default BasicHeader;
