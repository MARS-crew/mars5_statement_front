/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Share from '../Screen/Home/Share';
import RoundSend from '../Screen/Round/RoundSend';
import PersonSend from '../Screen/Person/PersonSendDetailPage';
import NewTopicPage from '../Screen/NewTopicPage';
import Send from '../Screen/Home/Send';
import PersonSendDetailPage from '../Screen/Person/PersonSendDetailPage';
import RoundSendDetailPage from '../Screen/Round/RoundSendDetailPage';
import Home from '../Screen/Home';
import LogoTitle from '../Components/Text/LogoTitle';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeamName"
        component={Home}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <Stack.Screen
        name="Share"
        component={Share}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#F2F2F2',
          },
        }}
      />
      <Stack.Screen
        name="Send"
        component={Send}
        options={{
          headerShown: true,
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
      <Stack.Screen
        name="PersonSendDetailPage"
        component={PersonSendDetailPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RoundSendDetailPage"
        component={RoundSendDetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
