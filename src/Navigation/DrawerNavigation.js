// DrawerNavigation.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigation';
import LogoTitle from '../Components/Text/LogoTitle';
import Colors from '../constants/Colors';
import { scale } from '../constants/Scale';
import { TextStyles } from '../constants/TextStyles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="마스외전 5기"
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
