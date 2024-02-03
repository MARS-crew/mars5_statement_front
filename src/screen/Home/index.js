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

  return (
    <>
      <DrawerNavigation />
      <FloatingButton onPress={handlePress} />
    </>
  );
};

export default Home;
