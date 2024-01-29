// TopTabNavigator.js
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Send from '../screen/Home/Send';
import Share from '../screen/Home/Share';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
        },
      }}>
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Send" component={Send} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
