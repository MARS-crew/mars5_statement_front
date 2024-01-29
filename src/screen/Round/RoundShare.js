import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backBtn from '../../assest/images/header/back.png';
import Colors from '../../constants/Colors';
import shareBtn from '../../assest/images/header/shareBtn.png';

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
    <SafeAreaView>
      <View style={styles.head}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={backBtn} style={styles.backBtn} />
            <Text style={styles.title}>Share</Text>
          </View>
          <Image source={shareBtn} style={styles.share} />
        </View>
      </View>
      {/* <TouchableOpacity style={styles.touchable} onPress={handlePress}>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    alignItems: 'center',
    top: 20,
  },
  header: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    alignContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    width: 8,
    height: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    justifyContent: '',
    left: 20,
  },
  share: {
    width: 40,
    height: 32,
  },
});

export default RoundShare;
