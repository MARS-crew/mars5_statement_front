import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';
import {useTextType} from '../../context/TextTypeContext';
import {useLogin} from '../../context/AuthContext';
import {getFetchData, postFetchData} from '../../api';
import LoadingUserModal from '../../components/LoadingUserModal';

const Send = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {changeTextType, textType} = useTextType();
  const {data} = useLogin();
  const {sendData} = data;
  const [joinCnt, setJoinCnt] = useState('');
  const [memberCnt, setMemberCnt] = useState('');
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (textType !== 'Send') {
        changeTextType();
      }
      console.log(textType);
    }, [textType, changeTextType]),
  );

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
            navigation.navigate('NewTopicWrite', {
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
      <ScrollView>
        {sendData.length > 0 ? (
          sendData.map(item => (
            <TouchableOpacity
              key={item.suggestId.toString()}
              onPress={() => handleClick(item.suggestId)}>
              <SwipeView DATA={item} />
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noData}>
            <Text>No send data available</Text>
          </View>
        )}
      </ScrollView>
      <LoadingUserModal
        isVisible={loading}
        joinCnt={joinCnt}
        memberCnt={memberCnt}
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
