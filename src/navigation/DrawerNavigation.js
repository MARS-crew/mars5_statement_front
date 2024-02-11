/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopTabNavigator from './TopTabNavigation';
import LogoTitle from '../components/text/LogoTitle';
import Colors from '../constants/Colors';
import {scale} from '../constants/Scale';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({DATA}) => {
  const navigation = useNavigation();

  const handleAddGroupPress = () => {
    navigation.navigate('AddGroup');
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={DATA.teamName}
        component={TopTabNavigator}
        options={({route}) => ({
          headerShown: true,
          headerStyle: {
            height: scale(68),
            backgroundColor: Colors.white,
          },
          headerTitle: props => <LogoTitle {...props} teamName={route.name} />,
          headerLeft: false,
          headerTitleContainerStyle: {
            marginRight: 20,
          },
        })}
      />

      <Drawer.Screen
        name="AddGroupButton"
        component={AddGroupButton}
        options={{
          title: 'Add Group',
          drawerLabel: ({color}) => (
            <TouchableOpacity onPress={handleAddGroupPress}>
              <Text style={{fontSize: 16, color}}>Add Group</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const AddGroupButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{color: Colors.black}}>Add Group</Text>
  </TouchableOpacity>
);
