import React from 'react';
import {Text, StyleSheet, Image, ImageSourcePropType, View} from 'react-native';
import {layout, SIZES, typography} from '../../../style';
import {images} from '../../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BackButton from './BackButton';

type THeader = {
  title: string;
  backgroundImage?: ImageSourcePropType;
};

const BasicHeader: React.FC<THeader> = ({title, backgroundImage}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  console.log(navigation.canGoBack());
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
      <View style={styles.headerButtons}>
        {/* TODO leading buttons other than back button */}
        <View style={styles.buttonGroup}>
          {navigation.canGoBack() && <BackButton />}
        </View>
        {/* TODO trailing buttons */}
        <View style={styles.buttonGroup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    width: '100%',
    height: SIZES.headerBaseHeight,
    flexGrow: 1,
    textAlign: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: SIZES.headerBaseHeight,
    paddingHorizontal: 14,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});

export default BasicHeader;
