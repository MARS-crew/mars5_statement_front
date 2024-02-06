import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';

const DATA = {
  SuggestList : [
    {
      suggest_id: 1,
      suggest: '코드리뷰 합시다',
      SummaryList: [
        {
          chapter_id: 2,
          summary_id: 2,
          member_id: 2,
          member_name: '박지민',
          reg_dt: '2024-01-01',
          opinion: '변수, 함수명 통일해주새요',
        },
        {
          chapter_id: 1,
          summary_id: 1,
          member_id: 1,
          member_name: '이영현',
          reg_dt: '2024-01-05',
          opinion:
            '다른 좋은 라이브러리 있는데 그거 쓰죠',
        },
      ],
    },
    {
      suggest_id: 2,
      suggest: '오늘 밥 뭐 먹죠',
      SummaryList: [
        {
          chapter_id: 2,
          summary_id: 2,
          member_id: 2,
          member_name: '임동현',
          reg_dt: '2024-01-01',
          opinion: '아무거나 먹읍시다',
        },
        {
          chapter_id: 1,
          summary_id: 1,
          member_id: 1,
          member_name: '한민규',
          reg_dt: '2024-01-05',
          opinion:
            '저는 김밥이요',
        },
      ],
    },
  ],
};

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
        {DATA.SuggestList.map((data) => (
          <SwipeView 
            key={ data.suggest_id }
            DATA = { data }
            handleRoundSend={handleRoundSend}
            handlePersonSend={handlePersonSend}
          />
        ))}
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
