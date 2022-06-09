import React from 'react';
import { FlatList, View, StyleSheet, Text, SafeAreaView, Image, Button, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';
import Stat from './Stat';
import { HomeScreenProps } from './HomeScreen'
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';

export interface Repository {
  id: string,
  fullName: string,
  description: string,
  language: string,
  forksCount: number,
  stargazersCount: number,
  ratingAverage: number,
  reviewCount: number,
  ownerAvatarUrl: string
}

const repositories: Array<Repository> = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

export interface ItemProps {
  item: Repository,
  navigation: any,
  route: RouteProp<RootStackParamList, "Home">,
}

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ( {item, navigation, route} : ItemProps ) => {
  return(
  <View style={styles.container}>
    <View style={styles.containerTop}>
      <Image
        style={styles.avatar}
        source={{ uri: item.ownerAvatarUrl }}
      />
      <View style={{ paddingLeft: 20 }}>
        <View style={styles.containerName}><Text style={styles.name}>{item.fullName}</Text></View>
        <View style={styles.containerDescription}><Text style={styles.description}>{item.description}</Text></View>
        <View style={styles.containerLanguage}><Text style={styles.language}>{item.language}</Text></View>
      </View>
    </View>
    <View style={styles.containerBottom}>
      <Stat header='Stars' stat={item.stargazersCount}/>
      <Stat header='Forks' stat={item.forksCount}/>
      <Stat header='Reviews' stat={item.reviewCount}/>
      <Stat header='Rating' stat={item.ratingAverage}/>
    </View>
    <View style={styles.containerButton}>
      <Button
        title='Show Details'
        onPress={() => navigation.navigate('RepositoryDetails', {
          item: item
        })}
      />
    </View>
  </View>
  )
};

const RepositoryList = ({ route, navigation }: HomeScreenProps ) => {
  const renderItem = ( {item} : ItemProps ) => (
    <Item item={item} route={route} navigation={navigation}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={navigation}
      />      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#6495ED'
  },
  container: {
    flexDirection: "column",
  },
  containerTop: {
    flex: 1,
    flexDirection: "row",
    minHeight: 120,
    padding: 20,
  },
  containerBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    height: 60,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  containerButton: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  name: {
    paddingTop: 4,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  containerName: {
    flexDirection: 'row',
    flex: 1,
    minWidth: 100,
    paddingBottom: 2,
    flexWrap: 'wrap'
  },
  containerDescription: {
    flexDirection: 'row',
    flex: 1,
    minWidth: 300,
    paddingBottom: 2,
    flexWrap: 'wrap'
  },
  containerStat: {
    flex: 1,
    textAlign: 'center'
  },
  description: {
    paddingBottom: 4,
    fontWeight: 'normal',
    flex: 1,
    flexWrap: 'wrap',
    color: '#666666'
  },
  containerLanguage: {
    backgroundColor: '#4C4CFF',
    borderRadius: 10,
    maxWidth: 100,
    alignItems: 'center'
  },
  language: {
    paddingVertical: 2,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textHeaderStat : {
    fontWeight: 'bold'
  },
  textBodyStat : {
    fontWeight: 'normal'
  }
});

export default RepositoryList;