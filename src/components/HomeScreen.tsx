import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer, NavigationContainerProps, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import { bindActionCreators } from '@reduxjs/toolkit';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import BottomTabBar from './BottomTabBar';


export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ route, navigation }: HomeScreenProps) {
  const query = useSelector((state: State) => state.searchQuery)
  const dispatch = useDispatch()
  const {
    setSearchQuery
  }= bindActionCreators(actionCreators, dispatch)

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search'
        placeholderTextColor='#999'
        value={query}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <Main navigation={navigation} route={route}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
  },
  input: {
    alignSelf: 'center',
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    position: 'relative'
  },
})

export default HomeScreen