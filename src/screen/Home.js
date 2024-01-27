// Home.js

import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import SwipeView from '../components/SwipeView';
import FloatingButton from '../components/FloatingButton';
const Home = ({navigation}) => {
  const handlePersonSend = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundSend = () => {
    navigation.navigate('RoundSend');
  };
  const handleNewTopic = () => {
    navigation.navigate('NewTopicPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SwipeView
          handlePersonSend={handlePersonSend}
          handleRoundSend={handleRoundSend}
        />
        <SwipeView
          handlePersonSend={handlePersonSend}
          handleRoundSend={handleRoundSend}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
