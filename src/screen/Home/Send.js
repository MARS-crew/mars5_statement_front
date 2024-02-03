import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SwipeView from '../../Components/View/SwipeView';
import Colors from '../../constants/Colors';

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
    backgroundColor: Colors.lightgrey,
    position: 'relative',
  },
});

export default Send;
