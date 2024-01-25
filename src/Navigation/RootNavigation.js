import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import SharePage from '../screen/SharePage';
import RoundSend from '../screen/RoundSend';
import PersonSend from '../screen/PersonSend';
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SendPage = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
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
    <Stack.Screen
      name="PersonSend"
      component={PersonSend}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const SharedPage = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SharePage"
      component={SharePage}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="sendPage" component={SendPage} />
      <TopTab.Screen name="sharedPage" component={SharedPage} />
    </TopTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{swipeEnabled: true}}>
      <Drawer.Screen name="TopTabs" component={TopTabs} />
      <Drawer.Screen name="RoundSend" component={RoundSend} />
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
