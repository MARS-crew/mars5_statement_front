// Home.js

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SwipeView from '../Components/SwipeView';
import GoogleLoginButton from '../Components/Login/GoogleLoginButton';

const Home = ({navigation}) => {
  const handlePersonSend = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundSend = () => {
    navigation.navigate('RoundSend');
  };

  return (
    <SafeAreaView>
      <GoogleLoginButton />
      <SwipeView
        handlePersonSend={handlePersonSend}
        handleRoundSend={handleRoundSend}
      />
    </SafeAreaView>
  );
};

export default Home;
