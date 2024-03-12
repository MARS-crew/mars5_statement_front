import React, { useState, useEffect } from 'react';
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
import { useLogin } from '../../context/AuthContext';
import { getFetchData, postFetchData } from '../../api';
import LoadingUserModal from '../../components/modal/LoadingUserModal';
import { useTextType } from '../../context/TextTypeContext';
import SwipeAbleList from '../../components/view/NewSwipeView';

const Send = () => {
  const navigation = useNavigation();
  const { data } = useLogin();
  const { sendData } = data;
  const { changeTextType, textType } = useTextType();
  const [joinCnt, setJoinCnt] = useState('');
  const [memberCnt, setMemberCnt] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(textType);
  useFocusEffect(
    React.useCallback(() => {
      if (textType !== 'Send') {
        changeTextType();
      }
    }, [textType, changeTextType]),
  );
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
