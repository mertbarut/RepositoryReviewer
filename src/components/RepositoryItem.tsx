import { RouteProp } from "@react-navigation/native";
import { bindActionCreators } from "@reduxjs/toolkit";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../../App";
import { State, actionCreators } from "../state";
import { RepositoryNode } from "../types/RepositoryNode.type";
import { User } from "../types/User.type";
import { View, Image, Button, Text, StyleSheet } from 'react-native'
import Stat from "./Stat";

export interface ItemProps {
  item: RepositoryNode,
  user: User,
  index: number,
  navigation: any,
  route: RouteProp<RootStackParamList, "Home">,
}

const RepositoryItem = ( {item, user, index, navigation, route} : ItemProps ) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: State) => state.page)
  const {
    goToNextPage,
    goToPrevPage
  } = bindActionCreators(actionCreators, dispatch)

  return(
  <View style={styles.container}>
    <View style={styles.containerTop}>
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
        color='#007AFF'
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

function arePropsEqual(prevProps : ItemProps, nextProps: ItemProps) {
  return prevProps.index === nextProps.index; 
}

export default memo(RepositoryItem, arePropsEqual)