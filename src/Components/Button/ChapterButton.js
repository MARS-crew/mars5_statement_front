import React from 'react';
import {TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import RoundSvg from '../../assest/images/list/RoundSvg'
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../constants/Scale';

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

const RoundButton = () => {
    const navigation = useNavigation();

    const handleRoundShare = () => {

    navigation.navigate('RoundShare', {data: DATA});
    };
        
  return (
    <TouchableOpacity
          style={[styles.rightAction, {backgroundColor: Colors.green}]}
          onPress={handleRoundShare}>
          <RoundSvg></RoundSvg>
        </TouchableOpacity>
  );
};
const styles = {
    rightAction: {
      flex: 1,
      height: scale(44),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : Colors.blue
    },
  };

export default RoundButton;