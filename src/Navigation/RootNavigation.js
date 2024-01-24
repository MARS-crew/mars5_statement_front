import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Share from '../screen/Share';
import RoundSend from '../screen/RoundSend';

const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const FirstStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="First"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="RoundSend"
      component={RoundSend}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const SecondStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Share"
      component={Share}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const TopTabs = () => {
  return (
    <TopTab.Navigator screenOptions={{swipeEnabled: false}}>
      <TopTab.Screen name="FirstStack" component={FirstStackScreen} />
      <TopTab.Screen name="SecondStack" component={SecondStackScreen} />
    </TopTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{swipeEnabled: true}}>
      <Drawer.Screen name="TopTabs" component={TopTabs} />
    </Drawer.Navigator>
  );
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
