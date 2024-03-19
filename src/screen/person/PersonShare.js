import React, {useState, useEffect, useRef} from 'react';
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
import {TextStyles} from '../../constants/TextStyles';
import Summary from '../../components/view/Summary';
import {moderateScale, scale} from '../../constants/Scale';
import MainHeader from '../../components/header/MainHeader';
import CircleImage from '../../components/image/CircleImage';
import {getPersonShare} from '../../api/GetData';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

const PersonShare = ({route}) => {
  const navigation = useNavigation();
  const [selectedMember, setSelectedMember] = useState();
  const [personalShareData, setPersonalShareData] = useState();
  const [loading, setLoading] = useState(true);
  const viewRef = useRef(null);

  const handlePress = item => {
    setSelectedMember(item);
  };
  const handleCaptureAndShare = async () => {
    try {
      const uri = await viewRef.current.capture();

      const shareOptions = {
        title: 'Share Image',
        message: 'Check out this captured image!',
        url: uri,
      };

      const result = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getPersonShare(route.params.suggestId);

        setPersonalShareData(response.data);
      } catch (error) {
        console.error('데이터 조회 실패:', error);
      }
    };

    loadData();
  }, [route.params.suggestId]);

  useEffect(() => {
    if (personalShareData) {
      setSelectedMember(personalShareData.opinionList[0]);
      setLoading(false);
    }
  }, [personalShareData]);

  const memberList = ({item}) => (
    // 멤버 이미지 상대경로가 동적할당 X memberImage로 임의 할당
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.member}>
        <CircleImage
          url={item.memberImg}
          isSelected={selectedMember.memberId === item.memberId}></CircleImage>
        <Text style={TextStyles.semiBold}>{item.memberName}</Text>
      </View>
    </TouchableOpacity>
  );

  const summaryList = ({item}) => (
    <>
      {item.memberId == selectedMember.memberId &&
        item.opinionList.map((data, index) => (
          <Summary key={index} item={data}></Summary>
        ))}
    </>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* 헤더 */}
        <MainHeader
          title={'Share'}
          onSharePress={handleCaptureAndShare}
          navigation={navigation}></MainHeader>
        {/* 주제 및 멤버 */}
        <ViewShot ref={viewRef} style={styles.captureContainer}>
          <View style={styles.middle}>
            <Text style={TextStyles.title}>{personalShareData.suggest}</Text>
            <FlatList
              data={personalShareData.opinionList}
              horizontal={true}
              renderItem={memberList}
              keyExtractor={item => item.memberId.toString()}
              style={styles.flatlist}
            />
          </View>
          {/* 써머리 목록 */}
          <View>
            <FlatList
              data={personalShareData.opinionList}
              renderItem={summaryList}
              keyExtractor={item => item.memberId.toString()}
            />
          </View>
        </ViewShot>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  captureContainer: {
    backgroundColor: Colors.white,
    top: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    left: 20,
  },
  middle: {
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 12,
  },
  flatlist: {
    paddingVertical: 12,
  },
  member: {
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
});

export default PersonShare;
