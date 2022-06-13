import React, {memo} from 'react';
import { FlatList, View, StyleSheet, Text, SafeAreaView, Image, Button, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';
import Stat from './Stat';
import { HomeScreenProps } from './HomeScreen'
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';

import { gql, useQuery } from '@apollo/client'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import { RepositoryNode } from '../types/RepositoryNode.type';
import { User } from '../types/User.type';
import RepositoryItem from './RepositoryItem';


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

export interface ItemProps {
  item: RepositoryNode,
  user: User,
  index: number,
  navigation: any,
  route: RouteProp<RootStackParamList, "Home">,
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ route, navigation }: HomeScreenProps ) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: State) => state.page)
  const query = useSelector((state: State) => state.searchQuery)
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

  const repositories : Array<RepositoryNode> = result.data.user.repositories.nodes

  const renderItem = ( {item} : ItemProps ) => (
    <RepositoryItem item={item} user={user} index={repositories.indexOf(item)} route={route} navigation={navigation}/>
  );

  return (
    <SafeAreaView>
      <FlatList    
        data={repositories
          .filter(r =>
            r.name.toLowerCase().includes(query.toLowerCase()) || (
              r.languages.nodes.length !== 0 && r.languages.nodes[0].name.toLowerCase().includes(query.toLowerCase())
            )
          )
          .slice(0, 10 * currentPage)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={navigation}
        initialNumToRender={3}
        refreshing={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
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