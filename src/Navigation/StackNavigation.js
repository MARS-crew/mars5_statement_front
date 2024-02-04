/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Share from '../screen/Home/Share';
import RoundSend from '../screen/round/RoundSend';
import PersonSend from '../screen/Person/PersonSendDetailPage';
import NewTopicChooseMember from '../screen/newTopic/NewTopicChooseMember';
import Send from '../screen/Home/Send';
import PersonSendDetailPage from '../screen/Person/PersonSendDetailPage';
import RoundSendDetailPage from '../screen/round/RoundSendDetailPage';
import Home from '../screen/Home';
import LogoTitle from '../Components/Text/LogoTitle';
import RoundShare from '../screen/round/RoundShare';
import Login from '../screen/login/login';
import Colors from '../constants/Colors';
import NewTopicPage from '../screen/NewTopicPage';
import RoundShare from '../screen/round/RoundShare';
import NewTopicPage from '../screen/newTopic/NewTopicPage';
import NewTopicTitle from '../screen/newTopic/NewtopicTitle';
import RoundShareDetailPage from '../screen/Round/RoundShareDetailPage';
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
          title: 'Add a Writing',
          headerStyle: {
            backgroundColor: Colors.white,
            elevation: 0,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewTopicChooseMember"
        component={NewTopicChooseMember}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewTopicTitle"
        component={NewTopicTitle}
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
        component={RoundShareDetailPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
