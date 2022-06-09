import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppBar from './src/components/AppBar';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';

import type { Repository } from './src/components/Repositories'
import RepositoryDetailsScreen from './src/components/RepositoryDetailsScreen';

export type HomeScreenParamtype = {
  itemId: number,
  otherParams: string
}

export type DetailScreenParamType = {
  itemId: number,
  otherParams: string
}

export type RepositoryDetailsScreenParamType = {
  item: Repository,
}

export type RootStackParamList = {
  Home: HomeScreenParamtype;
  Details: DetailScreenParamType;
  RepositoryDetails: RepositoryDetailsScreenParamType;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
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
  );
};

export default App;