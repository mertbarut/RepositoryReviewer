import React from 'react';
import { FlatList, View, StyleSheet, Text, SafeAreaView, Image, Button, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';
import Stat from './Stat';
import { HomeScreenProps } from './HomeScreen'
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';

import { gql, useQuery } from '@apollo/client'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

export const ALL_REPOSITORIES = gql`
query {
  user(login: "mertbarut") {
    login
    avatarUrl
    bio
    name
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        description
        id
        name
        url
        stargazerCount
        forks {
          totalCount
        }
        languages(first: 1) {
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`

type Fork = {
  totalCount: number
}

type Language = {
  name: string,
  color: string
}

type LanguageNode = {
  nodes: Array<Language>
}

export type User = {
  avatarUrl: string,
  bio: string,
  name: string,
  login: string,
  repositories: Array<RepositoryNode>
}

export type RepositoryNode = {
  description: string,
  id: string,
  name: string,
  url: string,
  stargazerCount: number,
  forks: Fork,
  languages: LanguageNode
}

export interface ItemProps {
  item: RepositoryNode,
  user: User,
  index: number,
  navigation: any,
  route: RouteProp<RootStackParamList, "Home">,
}

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ( {item, user, index, navigation, route} : ItemProps ) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: State) => state.page)
  const {
    goToNextPage,
    goToPrevPage
  } = bindActionCreators(actionCreators, dispatch)
  //console.log(index)

  return(
  <View style={styles.container}>
    <View style={styles.containerTop}>
      <Image
        style={styles.avatar}
        source={{ uri: user.avatarUrl }}
      />
      <View style={{ paddingLeft: 20 }}>
        <View style={styles.containerName}><Text style={styles.name}>{`${user.login}/${item.name}`}</Text></View>
        <View style={styles.containerDescription}><Text style={styles.description}>{item.description}</Text></View>
        <View style={{borderRadius: 10, maxWidth: 100, alignItems: 'center', backgroundColor: item.languages.nodes.length ? item.languages.nodes[0].color : '#000'}}><Text style={styles.language}>{item.languages.nodes.length ? item.languages.nodes[0].name : 'default'}</Text></View>
      </View>
    </View>
    <View style={styles.containerBottom}>
      <Stat header='Stars' stat={item.stargazerCount}/>
      <Stat header='Forks' stat={item.forks.totalCount}/>
      <Stat header='Reviews' stat={42}/>
      <Stat header='Rating' stat={99}/>
    </View>
    <View style={styles.containerButton}>
      <Button
        title='Show Details'
        onPress={() => navigation.navigate('RepositoryDetails', {
          item: item,
          user: user
        })}
        color='royalblue'
      />
      {
        index === 10 * currentPage - 1 &&
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Button
            title='Load More'
            onPress={(e) => {e.preventDefault(); goToNextPage(1);}}
          />    
        </View>
      }
    </View>
  </View>
  )
};

const RepositoryList = ({ route, navigation }: HomeScreenProps ) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: State) => state.page)
  const {
    goToNextPage,
    goToPrevPage
  } = bindActionCreators(actionCreators, dispatch)

  const result = useQuery(ALL_REPOSITORIES)

  if (result.loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  if (result.error) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  const user: User = {
    avatarUrl: result.data.user.avatarUrl,
    bio: result.data.user.bio,
    name: result.data.user.name,
    login: result.data.user.login,
    repositories: result.data.user.repositories.nodes,
  }

  const repositories = result.data.user.repositories.nodes

  const renderItem = ( {item} : ItemProps ) => (
    <Item item={item} user={user} index={repositories.indexOf(item)} route={route} navigation={navigation}/>
  );

    console.log(currentPage)

  return (
    <SafeAreaView>
      <FlatList
        data={repositories.slice(0, 10 * currentPage)}
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
    backgroundColor: '#BBBBBB'
  },
  container: {
    display: 'flex',
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
    paddingBottom: 20,
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
    backgroundColor: '#000',
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