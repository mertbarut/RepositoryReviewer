import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer, NavigationContainerProps, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Main from './Main'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ route, navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Main navigation={navigation} route={route}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen