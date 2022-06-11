import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import DetailedStat from './DetailedStat'

type Props = NativeStackScreenProps<RootStackParamList, 'RepositoryDetails'>;

function RepositoryDetailsScreen({ route, navigation }: Props ) {
  const { item, user } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Image
        style={styles.avatar}
        source={{ uri: user.avatarUrl }}
      />
      <View style={styles.containerName}><Text style={styles.name}>{item.name}</Text></View>
      <View style={styles.containerDescription}><Text style={styles.description}>{item.description}</Text></View>
      <View style={styles.containerLanguage}><Text style={styles.language}>{item.languages.nodes.length ? item.languages.nodes[0].name : 'None'}</Text></View>
      <View style={styles.containerStat}>
        <DetailedStat header='Stars' stat={item.stargazerCount}/>
        <DetailedStat header='Forks' stat={item.forks.totalCount}/>
        <DetailedStat header='Reviews' stat={42}/>
        <DetailedStat header='Rating' stat={99}/>
      </View>        
    </ScrollView>
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
    marginBottom: 20,
    flexWrap: 'wrap',
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
    marginVertical: 20,
    padding: 10
  },
  language: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  containerStat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 0,
    marginTop: 40
  },
  scrollView: {
    marginHorizontal: 20,
    alignItems: 'center'
  },
})

export default RepositoryDetailsScreen