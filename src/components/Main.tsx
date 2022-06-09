import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './Repositories';

import { HomeScreenProps } from './HomeScreen'

const Main = ({ route, navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <RepositoryList navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
});

export default Main;