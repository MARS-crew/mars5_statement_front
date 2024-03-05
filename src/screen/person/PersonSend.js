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
import { getPersonSend, getPersonShare } from '../../api/GetData';
import Sendsummary from '../../components/view/SendSummary';

const PersonSend = ({route}) => {
  const navigation = useNavigation();
  const [selectedMember, setSelectedMember] = useState();
  const [personalSendData, setPersonalSendData] = useState();
  const [loading, setLoading] = useState(true);

  const handlePress = (item) => {
    setSelectedMember(item);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getPersonSend(route.params.suggestId)

        setPersonalSendData(response.data)

      } catch (error) {
        console.error('데이터 조회 실패:', error);
      }
    };

    loadData();
  }, [route.params.suggestId]);

  useEffect(()=>{
    if(personalSendData){
      setSelectedMember(personalSendData.messageList[0]);
      setLoading(false)
    }
  }, [personalSendData])

  const memberList = ({item}) => (
    // 멤버 이미지 상대경로가 동적할당 X memberImage로 임의 할당
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.member}>
        <CircleImage url={item.memberImg} isSelected={selectedMember.memberId === item.memberId}></CircleImage>
        <Text style={TextStyles.semiBold}>{item.memberName}</Text>
      </View>
    </TouchableOpacity>
  );

  const summaryList = ({item}) => (
    <>
    {item.memberId == selectedMember.memberId && item.messageList.map((data, index) => (
      <Sendsummary key={index} item = {data}></Sendsummary>
    ))}
    </>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{flex : 1}}>
      {/* 헤더 */}
      <MainHeader navigation={navigation} ></MainHeader>
      {/* 주제 및 멤버 */}
      <View style={styles.middle}>
        <Text style={TextStyles.title}>{personalSendData.suggest}</Text>
        <FlatList
          data={personalSendData.messageList}
          horizontal={true}
          renderItem={memberList}
          keyExtractor={item => item.memberId.toString()}
          style = {styles.flatlist}
        />
      </View>
      {/* 써머리 목록 */}
      <View style={{flex : 1}}>
        <FlatList
          data={personalSendData.messageList}
          renderItem={summaryList}
          keyExtractor={item => item.memberId.toString()}
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

export default PersonSend;
