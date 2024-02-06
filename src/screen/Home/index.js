// Home.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LogoTitle from '../../components/text/LogoTitle';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import FloatingButton from '../../components/button/FloatingButton';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewTopicPage');
  };

  return (
    <>
      <DrawerNavigation />
      <FloatingButton onPress={handlePress} />
      <GoogleLoginButton />
    </>
  );
};

export default Home;
