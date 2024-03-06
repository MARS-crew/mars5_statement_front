import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';
import {useLogin} from '../../context/AuthContext';
import {getFetchData, postFetchData} from '../../api';
import LoadingUserModal from '../../components/modal/LoadingUserModal';
import { useTextType } from '../../context/TextTypeContext';
import SwipeAbleList from '../../components/view/NewSwipeView';

const Send = () => {
  const navigation = useNavigation();
  const {data} = useLogin();
  const {sendData} = data;
  const {changeTextType, textType} = useTextType();
  const [joinCnt, setJoinCnt] = useState('');
  const [memberCnt, setMemberCnt] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const backHandler = () => {
      if (loading) {
        setLoading(false);
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler,
    );

    return () => subscription.remove();
  }, [loading]);

  const handleCloseModal = () => {
    setLoading(false);
  };

  const handleClick = async suggestId => {
    try {
      setLoading(true);

      const response = await getFetchData(`/api/v1/send/chapter/${suggestId}`);

      if (response.data.summaryList[0].summary == null) {
        const response1 = await postFetchData(
          `/api/v1/send/join/${response.data.summaryList[0].chapterId}`,
        );

        const member = response1.data.map(member => member.name);
        const memberId = response1.data.map(member => member.userId);
        const ChapterId = response.data.summaryList[0].chapterId;
        const intervalId = setInterval(async () => {
          const response2 = await getFetchData(
            `/api/v1/send/join/${response.data.summaryList[0].chapterId}`,
          );
          setJoinCnt(response2.data.joinCnt);
          setMemberCnt(response2.data.memberCnt);
          if (response2.data.joinCnt === response2.data.memberCnt) {
            clearInterval(intervalId);
            setLoading(false);
            navigation.navigate('NewTopicWriteSend', {
              title: response.data.suggest,
              selectedType: 'send',
              selectedButtons: memberId,
              member,
              ChapterId,
            });
          }
        }, 2000);
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SwipeAbleList sendData={sendData}></SwipeAbleList>
      <LoadingUserModal
        isVisible={loading}
        joinCnt={joinCnt}
        memberCnt={memberCnt}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.lightgrey,
  },
});

export default Send;
