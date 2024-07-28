import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Games} from './screens/Games';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourites from './screens/Favourites/Favourites';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GameDetail} from './screens/GameDetail';

type RootStackParamList = {
  BottomTab: any;
  GameDetail: any;
};
type RootTabParamList = {
  Games: undefined;
  Favourites: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
  const {bottom, top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      safeAreaInsets={{bottom: bottom}}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          return <Text style={{color, fontSize: 18}}>{route.name}</Text>;
        },
      })}>
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="GameDetail" component={GameDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
