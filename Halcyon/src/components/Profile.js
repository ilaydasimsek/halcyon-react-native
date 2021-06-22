import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
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
