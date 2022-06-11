import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from './src/components/AppBar';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';

import type { RepositoryNode, User } from './src/components/Repositories'
import RepositoryDetailsScreen from './src/components/RepositoryDetailsScreen';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Constants from 'expo-constants';

import { Provider } from 'react-redux'
import { store } from './src/state/index'

export type HomeScreenParamtype = {
  itemId: number,
  otherParams: string
}

export type DetailScreenParamType = {
  itemId: number,
  otherParams: string
}

export type RepositoryDetailsScreenParamType = {
  item: RepositoryNode,
  user: User
}

export type RootStackParamList = {
  Home: HomeScreenParamtype;
  Details: DetailScreenParamType;
  RepositoryDetails: RepositoryDetailsScreenParamType;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const token = Constants.manifest.extra.token

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : null,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: 'https://api.github.com/graphql' })
  ),
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name='Home'
              component={HomeScreen}
              options={{ title: 'Overview' }}
            />
            <RootStack.Screen
              name='Details'
              component={DetailsScreen}
            />
            <RootStack.Screen
              name='RepositoryDetails'
              component={RepositoryDetailsScreen}
              options={{ title: 'Details' }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;