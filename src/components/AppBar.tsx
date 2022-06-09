import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingLeft: 12,
    paddingBottom: 12,
    color: '#ffffff'
  }
});

export default AppBar;