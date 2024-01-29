import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CaptureAndShareButton from '../../Components/Button/CaptureAndShareButton';

const DATA = {
  suggest_id: 1,
  suggest: '왜 사람은 잠을 자야만 하는가',
  SummaryList: [
    {
      chapter_id: 1,
      summary_id: 1,
      member_id: 2,
      member_name: '박지민',
      reg_dt: '2024-01-01',
      opinion: '다들 잠을 필요로 하는구나..',
    },
    {
      chapter_id: 2,
      summary_id: 2,
      member_id: 1,
      member_name: '백예나',
      reg_dt: '2024-01-05',
      opinion:
        '생각을 아무리 해도 왜 잠이 계속 오는건지 해결책을 낼 수 없었다.',
    },
  ],
};

const RoundShare = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('RoundShareDetailPage');
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <CaptureAndShareButton />
      </TouchableOpacity>
      <Text style={styles.text}>회차별</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default RoundShare;
