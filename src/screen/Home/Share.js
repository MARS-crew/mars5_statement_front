import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';

const DATA = {
  suggest_id: 1,
  suggest: '왜 사람은 잠을 자야만 하는가',
  SummaryList: [
    {
      chapter_id: 2,
      summary_id: 2,
      member_id: 2,
      member_name: '박지민',
      reg_dt: '2024-01-01',
      opinion: '다들 잠을 필요로 하는구나..',
    },
    {
      chapter_id: 1,
      summary_id: 1,
      member_id: 1,
      member_name: '백예나',
      reg_dt: '2024-01-05',
      opinion:
        '생각을 아무리 해도 왜 잠이 계속 오는건지 해결책을 낼 수 없었다.',
    },
  ],
};

const Share = () => {
  const navigation = useNavigation();

  const handlePersonShare = () => {
    navigation.navigate('PersonSend');
  };

  const handleRoundShare = () => {
    navigation.navigate('RoundShare', {data: DATA});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SwipeView
          handleRoundSend={handleRoundShare}
          handlePersonSend={handlePersonShare}
        />
        <SwipeView
          handleRoundSend={handleRoundShare}
          handlePersonSend={handlePersonShare}
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
