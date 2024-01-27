import React, {useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Home from '../screen/Home';
import SharePage from '../screen/SharePage';
import RoundSend from '../screen/RoundSend';
import PersonSend from '../screen/PersonSend';
import NewTopicPage from '../screen/NewTopicPage';
import FloatingButton from '../components/FloatingButton';

const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SendPage = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Home' || routeName === undefined) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
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
      <Stack.Screen
        name="NewTopicPage"
        component={NewTopicPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SharedPage = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'SharePage' || routeName === undefined) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  <Stack.Navigator>
    <Stack.Screen
      name="SharePage"
      component={SharePage}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>;
};

const TopTabs = () => {
  return (
    <>
      <TopTab.Navigator screenOptions={{swipeEnabled: false}}>
        <TopTab.Screen name="sendPage" component={SendPage} />
        <TopTab.Screen name="sharePage" component={SharePage} />
      </TopTab.Navigator>
      <FloatingButton />
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{swipeEnabled: true, headerShown: false}}>
      <Drawer.Screen name="Home" component={TopTabs} />
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
