import React, {useState, useEffect} from 'react';
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
import check from '../../assest/images/header/check.png';
import {TextStyles} from '../../constants/TextStyles';
import {getFetchData, postFetchData} from '../../api';
import LoadingUserModal from '../../components/modal/LoadingUserModal';
import {useLogin} from '../../context/AuthContext';

const NewTopicTitle = ({route}) => {
  const navigation = useNavigation();
  const {selectedType, selectedButtons, selectedMemberName} = route.params;
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [joinCnt, setJoinCnt] = useState('');
  const [memberCnt, setMemberCnt] = useState('');
  const [groupnum, setGroupnum] = useState();
  const {data} = useLogin();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    setGroupnum(data.activeGroup[0].groupId);
  }, [data.activeGroup]);

  const sendData = async () => {
    try {
      setLoading(true);
      const data = {
        groupId: groupnum,
        suggest: text,
        type: selectedType,
        memberIds: selectedButtons,
      };
      const response = await postFetchData('/api/v1/suggest/create', data);

      const intervalId = setInterval(async () => {
        const response1 = await getFetchData(
          `/api/v1/${selectedType}/join/${response.data}`,
        );

        const ChapterId = response.data;

        setJoinCnt(response1.data.joinCnt);
        setMemberCnt(response1.data.memberCnt);

        if (response1.data.joinCnt === response1.data.memberCnt) {
          clearInterval(intervalId);

          setLoading(false);

          if (selectedType === 'send') {
            console.log(response1.data, 'data');
            navigation.navigate('NewTopicWriteSend', {
              title: text,
              selectedType,
              selectedButtons,
              member: selectedMemberName,
              ChapterId,
            });
          } else {
            navigation.navigate('NewTopicWrite', {
              title: text,
              selectedType,
              selectedButtons,
              member: selectedMemberName,
              ChapterId,
            });
          }
        }
      }, 2000);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  const onChangeText = inputText => {
    setText(inputText);
  };

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
          <TouchableOpacity onPress={sendData}>
            <Image source={check} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.centeredText}>Input Title</Text>
      <View
        style={[
          styles.buttonContainer,
          {width: windowWidth * 0.9, height: windowHeight * 0.6},
        ]}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="아무거나 입력하세요..."
          i
          style={TextStyles.normal}
          placeholderTextColor="#D3D6D3"
        />
      </View>
      <LoadingUserModal
        isVisible={loading}
        joinCnt={joinCnt}
        memberCnt={memberCnt}
      />
    </SafeAreaView>
  );
};
export default NewTopicTitle;

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
    marginRight: 20,
    alignSelf: 'flex-end',
  },

  buttonContainer: {
    marginTop: 40,
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
    width: 40,
    height: 32,
  },
});
