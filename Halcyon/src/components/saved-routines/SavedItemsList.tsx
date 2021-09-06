import React, {useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ActivityIndicator, FlatList,
} from 'react-native';
import {ScreenName} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import SavedItemRow from './SavedItemRow';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ErrorScreen from '../common/ErrorScreen';
import {fetchRoutines} from '../../networking/Routines';
import {colors} from '../../style';

const SavedItemsList: React.FC = () => {
  const dispatch = useDispatch();
  const {isLoading, error, data} = useSelector(
    (state: RootState) => state.routines,
  );

  const navigation = useNavigation();
  const onRowPress = (title: string, id: number) => {
    navigation.navigate(ScreenName.ROUTINE_DETAILS, {title, id});
  };

  useEffect(() => {
    dispatch(fetchRoutines());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ActivityIndicator style={styles.indicator} color={colors.primary} />
    );
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={data?.routines}
        renderItem={({item}) => (
          <SavedItemRow
            {...item}
            onPress={() => onRowPress(item.title, item.key)}
          />
        )}
        style={styles.table}
        contentContainerStyle={styles.table}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    paddingBottom: 0,
  },
  table: {
    paddingTop: 4,
    paddingBottom: 12,
  },
  indicator: {
    width: '100%',
    transform: [{scale: 1.25}],
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedItemsList;
