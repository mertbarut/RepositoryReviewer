import { View, Text, StyleSheet, Button, Image } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import DetailedStat from './DetailedStat'

type Props = NativeStackScreenProps<RootStackParamList, 'RepositoryDetails'>;

function RepositoryDetailsScreen({ route, navigation }: Props ) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: item.ownerAvatarUrl }}
      />          
      <View style={styles.containerName}><Text style={styles.name}>{item.fullName}</Text></View>
      <View style={styles.containerDescription}><Text style={styles.description}>{item.description}</Text></View>
      <View style={styles.containerLanguage}><Text style={styles.language}>{item.language}</Text></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <DetailedStat header='Stars' stat={item.stargazersCount}/>
        <DetailedStat header='Forks' stat={item.forksCount}/>
        <DetailedStat header='Reviews' stat={item.reviewCount}/>
        <DetailedStat header='Rating' stat={item.ratingAverage}/>
      </View>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginVertical: 20
  },
  name: {
    paddingVertical: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 32
  },
  containerName: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 96,
  },
  containerDescription: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 64,
    paddingHorizontal: 20
  },
  description: {
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    color: '#666666'
  },
  containerLanguage: {
    backgroundColor: '#4C4CFF',
    borderRadius: 10,
    maxWidth: 200,
    maxHeight: 96,
    alignItems: 'center',
    padding: 10
  },
  language: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  }
})

export default RepositoryDetailsScreen