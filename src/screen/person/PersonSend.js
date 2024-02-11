import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import CaptureAndShareButton from '../../components/button/CaptureAndShareButton';
import backBtn from '../../assest/images/header/back.png';
import shareBtn from '../../assest/images/header/shareBtn.png';
import memberImage from '../../assest/images/test/memberImage.png';
import {FlatList} from 'react-native-gesture-handler';

const DATA = {
  suggest_id: 4,
  suggest: '칭찬해주기였나',
  memberList: [
    {
      member_id: 1,
      member_name: '백예나',
      // 나중에 url 로 들어올 것
      member_img: '../../assest/images/test/memberImage.png',
      message_List: [
        {
          chapter_id: 1,
          reg_dt: '2024-01-01',
          message: '착해요 진짜',
          location: '서대문구',
        },
        {
          chapter_id: 2,
          reg_dt: '2024-01-05',
          message: '착하다 진짜로',
          location: '봉천',
        },
      ],
    },
    {
      member_id: 2,
      member_name: '박지민',
      // 나중에 url 로 들어올 것
      member_img: '../../assest/images/test/memberImage.png',
      opinion_List: [
        {
          chapter_id: 1,
          reg_dt: '2024-01-01',
          opinion: '필요해서',
          location: '구일',
        },
        {
          chapter_id: 2,
          reg_dt: '2024-01-05',
          opinion: '건강을 위해',
          location: '봉천',
        },
      ],
    },
  ],
};

const PersonSend = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PersonSendDetailPage');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const memberList = ({item}) => (
    // 멤버 이미지 상대경로가 동적할당 X memberImage로 임의 할당
    <TouchableOpacity>
      <View style={styles.member}>
        <Image source={memberImage} style={styles.memberImage} />
        <Text style={styles.memberName}>{item.member_name}</Text>
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
        <Text style={styles.suggest}>{DATA.suggest}</Text>
      </View>
      {/* 멤버 이미지 */}
      <View style={styles.memberContain}>
        <FlatList
          data={DATA.memberList}
          horizontal={true}
          renderItem={memberList}
          keyExtractor={item => item.member_id.toString()}
          style={styles.memberList}
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
    top: 30,
    left: 30,
  },
  suggest: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'NotoSansKR',
    // eslint-disable-next-line no-dupe-keys
    fontWeight: 'bold',
  },
  memberContain: {
    alignItems: 'center',
  },
  memberList: {
    width: 320,
    top: 12,
  },
  member: {
    alignItems: 'center',
    top: 36,
    height: 148,
    marginRight: 12,
  },
  memberImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  memberName: {
    fontFamily: 'NotoSansKR',
    fontSize: 14,
    fontWeight: '500',
    top: 4,
    color: Colors.black,
  },
});

export default PersonSend;
