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
import { useTextType } from '../../context/TextTypeContext';
import { useLogin } from '../../context/AuthContext';
import { getFetchData, postFetchData } from '../../api';
import LoadingUserModal from '../../components/modal/LoadingUserModal';
import SwipeAbleList from '../../components/view/NewSwipeView';

const Share = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { changeTextType, textType } = useTextType();
  const { data } = useLogin();
  const { shareData } = data;
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

  return (
    <SafeAreaView style={styles.container}>
      <SwipeAbleList sendData={shareData}></SwipeAbleList>
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

export default Share;
