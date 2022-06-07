import React from 'react';
import { FlatList, View, StyleSheet, Text, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

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
  item: Repository
}

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ( {item} : ItemProps ) => {
  return(
    <View>
      <Text>
        Fullname: {item.fullName}{'\n'}
        Description: {item.description}{'\n'}
        Language: {item.language}{'\n'}
        Stars: {item.stargazersCount}{'\n'}
        Forks: {item.forksCount}{'\n'}
        Reviews: {item.reviewCount}{'\n'}
        Rating: {item.ratingAverage}{'\n'}        
      </Text>         
    </View>
  )
};

const RepositoryList = () => {
  const renderItem = ( {item} : ItemProps ) => (
    <Item item={item}/>
  );

  return (
    <SafeAreaView >
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />      
    </SafeAreaView>

  );
};

export default RepositoryList;