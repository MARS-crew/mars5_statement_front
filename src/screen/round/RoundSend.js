import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import backBtn from '../../assest/images/header/back.png';
import Colors from '../../constants/Colors';
import shareBtn from '../../assest/images/header/shareBtn.png';
import {getRoundSend} from '../../api/GetData';

const RoundSend = ({route}) => {
  const navigation = useNavigation();
  const {suggestId} = route.params;

  const [summary, setSummary] = useState([]);
  const [suggest, setSuggest] = useState();

  const formatDate = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handlePress = ({chapterId}) => {
    navigation.navigate('RoundSendDetailPage', {chapterId: chapterId});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const responseData = await getRoundSend(suggestId);
        setSummary(responseData.data.summaryList);
        setSuggest(responseData.data.suggest);
      } catch (error) {
        console.error('데이터 조회 실패:', error);
      }
    };

    loadData();
  }, [suggestId]);

  const summaryList = ({item}) => (
    <TouchableOpacity onPress={() => handlePress({chapterId: item.chapterId})}>
      <View style={styles.summarybox}>
        <View style={styles.summarybox2}>
          <View style={styles.summarybox3}>
            <Text style={styles.round}>{item.chapterId}th</Text>
            <Text style={styles.user}>{item.memberName}</Text>
          </View>
          <Text style={styles.date}>{formatDate(item.regDt)}</Text>
        </View>
        <Text style={styles.summary}>{item.summary}</Text>
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
        <Text style={styles.suggest}>{suggest}</Text>
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
          data={summary}
          renderItem={summaryList}
          keyExtractor={item => item.chapterId}
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
