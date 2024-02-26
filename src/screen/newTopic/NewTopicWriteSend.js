import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import back from '../../assest/images/header/back.png';
import nextWriteButton from '../../assest/images/send/nextWriteButton.png';
import check from '../../assest/images/header/check.png';
import {TextStyles} from '../../constants/TextStyles';
import {getLocation} from '../../api/naverApi/naverGeocodingApi';
import {getFetchData, postFetchData} from '../../api';
import LoadingUserModal from '../../components/modal/LoadingUserModal';

const NewTopicWriteSend = ({route}) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const {title, selectedType, selectedButtons, member, ChapterId} =
    route.params;

  const [loading, setLoading] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const handleChooseMember = async () => {
    const location = await getLocation();
    console.log(location);
    if (location != '' || location != undefined || location != false) {
      handleClick(location);
    } else {
      console.error('위치 찾기 실패');
    }
  };

  const handleClick = async location => {
    try {
      setLoading(true);

      const intervalId = setInterval(async () => {
        const response2 = await getFetchData(
          `/api/v1/${selectedType}/write/${ChapterId}`,
        );

        if (response2.data.writeCnt === response2.data.memberCnt) {
          const memberWriteResponse = await getFetchData(
            `/api/v1/${selectedType}/write/after/${ChapterId}`,
          );

          const opinions = memberWriteResponse.data.opinions.map(
            member => member.opinion,
          );

          clearInterval(intervalId);
          setLoading(false);

          navigation.navigate('WriteView', {
            title,
            text,
            selectedType,
            selectedButtons,
            member,
            ChapterId,
            opinions,
          });
        }
      }, 2000);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const onChangeText = inputText => {
    setText(inputText);
  };
  const handleNextMember = async () => {
    setCurrentMemberIndex(async prevIndex => {
      const currentMemberId = selectedButtons[prevIndex];

      try {
        console.log(currentMemberId, title, ChapterId);
        const response = await postFetchData(
          `/api/v1/send/write/${ChapterId}`,
          [
            {
              to_id: currentMemberId,
              message: title,
            },
          ],
        );
        console.log('Response:', response);
      } catch (error) {
        console.error('에러 발생:', error);
      }

      const nextIndex = prevIndex + 1;
      if (nextIndex < member.length) {
        return nextIndex;
      } else {
        await handleChooseMember();
        return prevIndex;
      }
    });
  };
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Image source={back} style={styles.backBtn} />

              <Text style={styles.title}>Add a Writing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextMember}>
            <Image source={nextWriteButton} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.centeredText}>{title}</Text>
      <View style={styles.selectedTextContainer}>
        <Text style={[TextStyles.semiBold, styles.send]}>
          {member[currentMemberIndex]}에게..
        </Text>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {width: windowWidth * 0.9, height: windowHeight * 0.6},
        ]}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="아무거나 입력하세요..."
          multiline={true}
          style={TextStyles.normal}
          placeholderTextColor="#D3D6D3"
        />
      </View>
    </SafeAreaView>
  );
};
export default NewTopicWriteSend;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  centeredText: {
    color: Colors.black,
    marginTop: '20%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'NotoSansEN',
  },
  selectedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },

  buttonContainer: {
    marginTop: 10,
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexGrow: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
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
    left: 20,
  },
  share: {
    width: 35,
    height: 35,
  },
  send: {
    fontWeight: 'bold',
  },
});
