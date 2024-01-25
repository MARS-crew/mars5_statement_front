// Home.js

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SwipeView from '../components/SwipeView';

const Home = ({navigation}) => {
  const handlePersonSend = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundSend = () => {
    navigation.navigate('RoundSend');
  };

  return (
    <SafeAreaView>
      <SwipeView
        handlePersonSend={handlePersonSend}
        handleRoundSend={handleRoundSend}
      />
    </SafeAreaView>
  );
};

export default Home;
