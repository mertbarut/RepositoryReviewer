import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import RepositoryDetailsScreen from './src/components/RepositoryDetailsScreen';
import BottomTabBar from './src/components/BottomTabBar';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Constants from 'expo-constants';

import { Provider } from 'react-redux'
import { store } from './src/state/index'

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
          <BottomTabBar />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;