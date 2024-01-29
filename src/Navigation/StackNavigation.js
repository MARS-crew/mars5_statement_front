/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Share from '../screen/home/Share';
import RoundSend from '../screen/round/RoundSend';
import PersonSend from '../screen/person/PersonSendDetailPage';
import NewTopicPage from '../screen/NewTopicPage';
import Send from '../screen/home/Send';
import PersonSendDetailPage from '../screen/person/PersonSendDetailPage';
import RoundSendDetailPage from '../screen/round/RoundSendDetailPage';
import Home from '../screen/home';
import LogoTitle from '../components/text/LogoTitle';
import RoundShare from '../screen/round/RoundShare';
import Login from '../screen/login/login';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TeamName"
        component={Home}
        options={{
          headerShown: false,
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
          title: 'Add a Writing',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.white,
            elevation: 0,
          },
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
      <Stack.Screen
        name="RoundShare"
        component={RoundShare}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RoundShareDetailPage"
        component={RoundSendDetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
