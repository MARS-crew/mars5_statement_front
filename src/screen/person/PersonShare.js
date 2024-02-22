import React, {useState, useEffect} from 'react';
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
import {FlatList} from 'react-native-gesture-handler';
import { TextStyles } from '../../constants/TextStyles';
import Summary from '../../components/view/Summary';
import {moderateScale, scale} from '../../constants/Scale';
import MainHeader from '../../components/header/MainHeader';
import CircleImage from '../../components/image/CircleImage';

const DATA = {
  suggest_id: 4,
  suggest: '칭찬해주기였나',
  memberList: [
    {
      member_id: 1,
      member_name: '백예나',
      // 나중에 url 로 들어올 것
      member_img: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg',
      opinion_List: [
        {
          chapter_id: 1,
          reg_dt: '2024-01-01',
          opinion: '착해요 진짜',
          location: '서대문구',
        },
        {
          chapter_id: 2,
          reg_dt: '2024-01-05',
          opinion: '착하다 진짜로',
          location: '봉천',
        },
      ],
    },
    {
      member_id: 2,
      member_name: '박지민',
      summary: '이게 무슨 말이지..',
      // 나중에 url 로 들어올 것
      member_img: '',
      opinion_List: [
        {
          chapter_id: 3,
          reg_dt: '2024-01-01',
          opinion: '필요해서',
          location: '구일',
        },
        {
          chapter_id: 4,
          reg_dt: '2024-01-05',
          opinion: '건강을 위해',
          location: '봉천',
        },
      ],
    },
  ],
};

const PersonShare = ({route}) => {
  const navigation = useNavigation();
  const [selectedMember, setSelectedMember] = useState(DATA.memberList[0]);
  const {suggestId} = route.params;

  const handlePress = (item) => {
    setSelectedMember(item);
  };

  

  const memberList = ({item}) => (
    // 멤버 이미지 상대경로가 동적할당 X memberImage로 임의 할당
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.member}>
        <CircleImage url={item.member_img} isSelected={selectedMember.member_id === item.member_id}></CircleImage>
        <Text style={TextStyles.semiBold}>{item.member_name}</Text>
      </View>
    </TouchableOpacity>
  );

  const summaryList = ({item}) => (
    <>
    {item.member_id == selectedMember.member_id && item.opinion_List.map((data, index) => (
      <Summary key={index} item = {data}></Summary>
    ))}
    </>
  );

  useEffect(() => {
    // 기본적으로 첫 번째 멤버 선택
    setSelectedMember(DATA.memberList[0]);
  }, []);

  return (
    <SafeAreaView>
      {/* 헤더 */}
      <MainHeader navigation={navigation} ></MainHeader>
      {/* 주제 및 멤버 */}
      <View style={styles.middle}>
        <Text style={TextStyles.title}>{DATA.suggest}</Text>
        <FlatList
          data={DATA.memberList}
          horizontal={true}
          renderItem={memberList}
          keyExtractor={item => item.member_id.toString()}
          style = {styles.flatlist}
        />
      </View>
      {/* 써머리 목록 */}
      <View>
        <FlatList
          data={DATA.memberList}
          renderItem={summaryList}
          keyExtractor={item => item.member_id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    left: 20,
  },
  middle: {
    paddingHorizontal : 20,
    gap : 12,
    backgroundColor : Colors.white
  },
  flatlist : {
    paddingVertical : 12,
  },
  member: {
    alignItems: 'center',
    gap : 4,
    marginRight : 4,
  },
});

export default PersonShare;
