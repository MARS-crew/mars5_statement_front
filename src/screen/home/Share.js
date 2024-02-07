import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';

const DATA = {
  SuggestList: [
    {
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
          opinion: '저는 김밥이요',
        },
      ],
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
        {DATA.SuggestList.map(data => (
          <SwipeView
            key={data.suggest_id}
            DATA={data}
            handleRoundSend={handleRoundShare}
            handlePersonSend={handlePersonShare}
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
    position: 'relative',
    backgroundColor: Colors.lightgrey,
  },
});

export default Share;
