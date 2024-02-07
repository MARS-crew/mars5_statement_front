// TopTabNavigator.js
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Send from '../screen/home/Send';
import Share from '../screen/home/Share';
import Colors from '../constants/Colors';
import {moderateScale, scale} from '../constants/Scale';
import {TextStyles} from '../constants/TextStyles';
import {Dimensions} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const totalWidth = Dimensions.get('screen').width;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // backgroundColor: Colors.white,
          backgroundColor: Colors.white,
          shadowColor: 'transparent',
          height: scale(44),
        },
        tabBarLabelStyle: TextStyles.semiBold,
        tabBarAndroidRipple: {borderless: false},
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderBottomColor: Colors.green,
        },
      }}>
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Send" component={Send} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
