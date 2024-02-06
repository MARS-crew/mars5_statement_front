// DrawerNavigation.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigation';
import LogoTitle from '../components/text/LogoTitle';
import Colors from '../constants/Colors';
import { scale } from '../constants/Scale';

const Drawer = createDrawerNavigator();


const DrawerNavigation = ({DATA}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={DATA.teamName}
        component={TopTabNavigator}
        options={({route}) => ({
          headerShown: true,
          headerStyle: {
            height: scale(68),
            backgroundColor: Colors.white
          },
          headerTitle: props => <LogoTitle {...props} teamName={route.name}/>,
          headerLeft: false,
          headerTitleContainerStyle: {
            marginRight: 20,
          },
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
