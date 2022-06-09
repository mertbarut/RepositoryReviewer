import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function DetailsScreen({ route, navigation }: Props ) {
  const { itemId, otherParams } = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParams)}</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParams: otherParams
        })}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailsScreen