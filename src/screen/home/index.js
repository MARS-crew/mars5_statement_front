// Home.js
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LogoTitle from '../../components/text/LogoTitle';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import FloatingButton from '../../components/button/FloatingButton';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';

const Home = () => {
  const navigation = useNavigation();
  // const {textType, toggleTextType} = useTextType();
  // console.log(textType);

  const handlePress = () => {
    navigation.navigate('NewTopicPage');
  };
  const DATA = {
    teamid: 1,
    teamName: '마스외전 5기',
  };
  return (
    <>
      <DrawerNavigation DATA={DATA} />
      <FloatingButton onPress={handlePress} />
    </>
  );
};

export default Home;
