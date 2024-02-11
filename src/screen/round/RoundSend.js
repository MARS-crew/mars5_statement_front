import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
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

const RoundSend = () => {
  const route = useRoute();
  const {selectedItem} = route.params;
  const data = route.params?.data;
  const navigation = useNavigation();

  const handlePress = ({item}) => {
    navigation.navigate('RoundSendDetailPage', {item: item});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const summaryList = ({item}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.summarybox}>
        <View style={styles.summarybox2}>
          <View style={styles.summarybox3}>
            <Text style={styles.round}>{item.chapter_id}th</Text>
            <Text style={styles.user}>{item.member_name}</Text>
          </View>
          <Text style={styles.date}>{item.reg_dt}</Text>
        </View>
        <Text style={styles.summary}>{item.opinion}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      {/* 헤더 */}
      <View style={styles.head}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleBack}>
              <Image source={backBtn} style={styles.backBtn} />
            </TouchableOpacity>
            <Text style={styles.title}>Send</Text>
          </View>
          <Image source={shareBtn} style={styles.share} />
        </View>
      </View>
      {/* 주제 */}
      <View style={styles.middle}>
        <Text style={styles.suggest}>{data.suggest}</Text>
        {/* Round 추가 버튼 */}
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add Session</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 써머리 목록 */}
      <View style={styles.summaryContain}>
        <FlatList
          data={data.SummaryList}
          renderItem={summaryList}
          keyExtractor={item => item.summary_id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    top: 20,
  },
  header: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    height: 60,
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
    left: 20,
    fontFamily: 'NotoSansEN',
  },
  share: {
    width: 40,
    height: 32,
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
  },
  suggest: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'NotoSansKR',
    // eslint-disable-next-line no-dupe-keys
    fontWeight: 'bold',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    fontFamily: 'NotoSansEN',
  },
  btn: {
    borderWidth: 1,
    borderColor: Colors.grey,
    width: 240,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: 24,
  },
  summaryContain: {
    marginTop: 120,
    borderColor: Colors.grey,
    borderWidth: 0.8,
  },
  summarybox: {
    width: '100%',
    borderColor: Colors.grey,
    borderWidth: 0.4,
  },
  summarybox2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  round: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 16,
    color: Colors.black,
    fontFamily: 'NotoSansKR',
  },
  user: {
    fontSize: 12,
    marginLeft: 20,
    color: Colors.black,
    fontFamily: 'NotoSansKR',
  },
  summary: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 18,
    marginBottom: 18,
    marginRight: 20,
    color: Colors.black,
    fontFamily: 'NotoSansKR',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.grey,
    marginTop: 16,
    marginRight: 20,
  },
});

export default RoundSend;
