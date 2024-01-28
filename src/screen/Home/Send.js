import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SwipeView from '../../components/View/SwipeView';

const Send = () => {
  const navigation = useNavigation();

  const handlePersonSend = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundSend = () => {
    navigation.navigate('RoundSend');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SwipeView
          handleRoundSend={handleRoundSend}
          handlePersonSend={handlePersonSend}
        />
        <SwipeView
          handleRoundSend={handleRoundSend}
          handlePersonSend={handlePersonSend}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tabContainer: {
    flexDirection: 'row',
    width: screenWidth,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
});

export default Send;
