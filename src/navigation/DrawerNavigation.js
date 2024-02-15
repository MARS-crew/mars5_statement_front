/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import TopTabNavigator from './TopTabNavigation';
import LogoTitle from '../components/text/LogoTitle';
import Colors from '../constants/Colors';
import {scale} from '../constants/Scale';

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DrawerNavigation = ({DATA}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('NewTopicPage');
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: scale(320),
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {DATA.map(team => (
        <Drawer.Screen
          key={team.teamid}
          name={team.teamName}
          component={TopTabNavigator}
          options={({route}) => ({
            title: route.name,
            groupImageURL: team.imageurl,
            headerShown: true,
            headerStyle: {
              height: scale(68),
              backgroundColor: Colors.white,
            },
            headerTitle: props => (
              <LogoTitle {...props} teamName={route.name} />
            ),
            headerLeft: false,
            headerTitleContainerStyle: {
              marginRight: 20,
            },
          })}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
