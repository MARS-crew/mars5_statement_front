import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SwipeView from '../../Components/View/SwipeView';

const DATA = {
  status: 200,
  message: '주제 조회 성공',
  data: [
    {
      id: 1,
      suggest: '오늘 점심식사 어땠나요?',
      type: 'share',
      reg_dt: '2024-01-28T12:34:56.789Z',
    },
    {
      id: 2,
      suggest: '코드리뷰를 해보아요',
      type: 'send',
      reg_dt: '2024-01-29T12:34:56.789Z',
    },
  ],
};

const Share = () => {
  const navigation = useNavigation();

  const handlePersonSend = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundSend = () => {
    navigation.navigate('RoundShare');
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

export default Share;
