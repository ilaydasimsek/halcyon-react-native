import {useNavigation} from '@react-navigation/native';
import {icons} from '../../../../constants';
import React from 'react';
import HeaderButton from './HeaderButton';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <HeaderButton icon={icons.back} onPressIn={() => navigation.goBack()} />
  );
};

export default BackButton;
