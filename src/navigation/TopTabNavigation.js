// TopTabNavigator.js
import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Send from '../screen/home/Send';
import Share from '../screen/home/Share';
import Colors from '../constants/Colors';
import {scale} from '../constants/Scale';
import {TextStyles} from '../constants/TextStyles';
import {Dimensions} from 'react-native';
import {useTextType} from '../../context/TextTypeContext';

import {getSuggest} from '../api/GetData';
import {useLogin} from '../context/AuthContext';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  // const {isLogin} = useLogin();
  // const groupId = 2; // 임의 그룹 아이디 설정
  // const [shareData, setShareData] = useState([]);
  // const [sendData, setSendData] = useState([]);

  // useEffect(() => {
  //   if (isLogin) {
  //     const loadData = async () => {
  //       try {
  //         const responseData = await getSuggest(groupId);
  //         const shareFiltered = responseData.data.groupSuggests.filter(
  //           item => item.type === 'share',
  //         );
  //         const sendFiltered = responseData.data.groupSuggests.filter(
  //           item => item.type === 'send',
  //         );
  //         setShareData(shareFiltered);
  //         setSendData(sendFiltered);
  //       } catch (error) {
  //         console.error('데이터 조회 실패:', error);
  //       }
  //     };
  //     loadData();
  //   }
  // }, [isLogin, groupId]);

  // if (!isLogin) {
  //   return null;
  // }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent',
          // height: scale(44),
          height: 60,
        },
        // tabBarLabelStyle: TextStyles.semiBold,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          fontFamily: 'NotoSansEN',
          color: Colors.black,
        },
        tabBarAndroidRipple: {borderless: false},
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderBottomColor: Colors.green,
        },
      }}>
      <Tab.Screen
        name="Share"
        component={Share}
        // initialParams={{data: shareData}} // Share 탭에 shareData 전달
      />
      <Tab.Screen
        name="Send"
        component={Send}
        // initialParams={{data: sendData}} // Send 탭에 sendData 전달
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
