/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Share from '../screen/Home/Share';
import RoundSend from '../screen/Round/RoundSend';
import PersonSend from '../screen/Person/PersonSendDetailPage';
import NewTopicPage from '../screen/NewTopicPage';
import Send from '../screen/Home/Send';
import PersonSendDetailPage from '../screen/Person/PersonSendDetailPage';
import RoundSendDetailPage from '../screen/Round/RoundSendDetailPage';
import Home from '../screen/Home';
import LogoTitle from '../Components/Text/LogoTitle';
import RoundShare from '../screen/Round/RoundShare';

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
