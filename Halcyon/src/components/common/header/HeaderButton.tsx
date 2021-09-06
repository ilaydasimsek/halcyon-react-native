import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React from 'react';
import {layout} from '../../../style';

type THeaderButton = {
  icon: ImageSourcePropType;
  onPressIn: () => void;
};
const HeaderButton: React.FC<THeaderButton> = ({icon, onPressIn}) => {
  return (
    <TouchableOpacity onPressIn={onPressIn} style={layout.header.button}>
      <Image source={icon} style={layout.header.button} />
    </TouchableOpacity>
  );
};

export default HeaderButton;
