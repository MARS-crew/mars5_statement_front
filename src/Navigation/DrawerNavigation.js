// DrawerNavigation.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TopTabNavigator from './TopTabNavigation';
import LogoTitle from '../Components/Text/LogoTitle';

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
            backgroundColor: '#F2F2F2',
          },
          headerTitle: props => <LogoTitle {...props} teamName={route.name} />,
          headerLeft: false,
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
