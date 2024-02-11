import Colors from '../../constants/Colors';
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backBtn from '../../assest/images/header/back.png';
import heart from '../../assest/images/share/heart.png';

const DATA = {
  chapter_id: 1,
  summary: '다들 잠을 필요로 하는구나..',
  reg_dt: '2024-01-01',
  memberData: [
    {
      opinion_id: 1,
      member_id: 2,
      member_name: '박지민',
      location: '구일',
      opinion: '죽지 못해서..',
      is_like: true,
    },
    {
      opinion_id: 2,
      member_id: 1,
      member_name: '백예나',
      location: '서대문구',
      opinion: '자도자도 졸린 이유 저도 몰라요 아아아아악',
      is_like: false,
    },
  ],
};

const opinionList = ({item, shareData}) => (
  <View style={styles.opinionbox}>
    <View style={styles.opinionbox2}>
      <Text style={styles.user}>{item.member_name}</Text>
      <Image source={heart} style={styles.heart} />
    </View>
    <View style={styles.opMargin}>
      <Text style={styles.opinion}>{item.opinion}</Text>
    </View>
  </View>
);

const RoundShareDetailPage = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      {/* 헤더 */}
      <View style={styles.head}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleBack}>
              <Image source={backBtn} style={styles.backBtn} />
            </TouchableOpacity>
            <Text style={styles.title}>Share</Text>
          </View>
          {/* <Image source={shareBtn} style={styles.share} /> */}
        </View>
      </View>
      {/* 써머리 */}
      <View style={styles.middle}>
        <Text style={styles.suggest}>{DATA.summary}</Text>
        <Text style={styles.date}>{DATA.reg_dt}</Text>
      </View>
      {/* 개인 의견 목록 */}
      <View style={styles.opinionContain}>
        <FlatList
          data={DATA.memberData}
          renderItem={opinionList}
          keyExtractor={item => item.opinion_id.toString()}
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
  },
  share: {
    width: 40,
    height: 32,
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'left',
    top: 80,
    left: 20,
  },
  suggest: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'NotoSansKR',
    // eslint-disable-next-line no-dupe-keys
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.grey,
    marginTop: 16,
  },
  opinionContain: {
    marginTop: 120,
    borderColor: Colors.grey,
    borderWidth: 0.4,
  },
  opinionbox: {
    width: '100%',
    height: 130,
    borderColor: Colors.grey,
    borderWidth: 0.4,
  },
  opinionbox2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  user: {
    marginTop: 18,
    fontSize: 14,
    marginLeft: 20,
    color: Colors.black,
    fontFamily: 'NotoSansKR',
    fontWeight: '700',
  },
  heart: {
    marginTop: 18,
    marginRight: 20,
    width: 24,
    height: 24,
  },
  opMargin: {
    marginLeft: 20,
    marginTop: 22,
    marginBottom: 20,
    marginRight: 20,
  },
  opinion: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'NotoSansKR',
  },
});

export default RoundShareDetailPage;
