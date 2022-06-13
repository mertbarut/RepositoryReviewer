import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RepositoryNode } from '../types/RepositoryNode.type';
import { User } from '../types/User.type';
import HomeScreen from './HomeScreen';
import RepositoryDetailsScreen from './RepositoryDetailsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const Tab = createBottomTabNavigator();

const RepositoryTab = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
      <RootStack.Screen
        name='RepositoryDetails'
        component={RepositoryDetailsScreen}
        options={{ title: 'Details' }}
      />
    </RootStack.Navigator>
  )
}

function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: true, headerShown: false}}
    >
      <Tab.Screen
        name="Home"
        component={RepositoryTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={RepositoryTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-settings' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Deposit"
        component={RepositoryTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='cash-plus' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar