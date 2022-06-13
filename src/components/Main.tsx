import { Text, StyleSheet, View, TextInput } from 'react-native';
import RepositoryList from './Repositories';

import { HomeScreenProps } from './HomeScreen'
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import { SafeAreaView } from 'react-native-safe-area-context';

const Main = ({ route, navigation }: HomeScreenProps) => {
  const query = useSelector((state: State) => state.searchQuery)
  const dispatch = useDispatch()
  const {
    setSearchQuery
  }= bindActionCreators(actionCreators, dispatch)

  return (
    <View style={styles.container}>
      <RepositoryList navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  }
});

export default Main;