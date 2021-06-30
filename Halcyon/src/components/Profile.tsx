import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTempScreen} from '../networking/Temp';
import {RootState} from '../store';

const Profile = () => {
  const dispatch = useDispatch();
  const {isLoading, data} = useSelector((state: RootState) => state.temp);
  useEffect(() => {
    dispatch(getTempScreen());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Text>{isLoading ? 'Loading...' : `${data?.result}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default Profile;
