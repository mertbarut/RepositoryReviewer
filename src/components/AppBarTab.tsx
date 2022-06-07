import { View, Text, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  }
});

const AppBarTab = () => {
  return (
    <Pressable >
      <Text style={styles.text}>
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;