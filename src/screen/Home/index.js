// Home.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LogoTitle from '../../components/Text/LogoTitle';
import DrawerNavigation from '../../Navigation/DrawerNavigation';
import FloatingButton from '../../components/Button/FloatingButton';

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
