// Home.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LogoTitle from '../../Components/Text/LogoTitle';
import DrawerNavigation from '../../Navigation/DrawerNavigation';
import FloatingButton from '../../Components/Button/FloatingButton';
import GoogleLoginButton from '../../Components/Login/GoogleLoginButton';
const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewTopicPage');
  };
  const DATA = {
    teamid : 1,
    teamName : "마스외전 5기",
  }
  return (
    <>
      <DrawerNavigation DATA={DATA}/>
      <FloatingButton onPress={handlePress} />
    </>
  );
};

export default Home;
