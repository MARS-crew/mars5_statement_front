import React, {useState, useEffect} from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';
import {TextTypeProvider} from './src/context/TextTypeContext';
import {AuthProvider} from './src/context/AuthContext';
import {requestPermission} from './src/api/naverApi/requestPermission';
import usePushNotification from './src/api/push/usePushNotification';
import {requestPushPermission} from './src/api/push/usePushNotification';
const App = () => {
  const {
    listenToForegroundNotifications,
    listentoBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  useEffect(() => {
    const requestPermissions = async () => {
      // 위치 권한 요청
      let locationResult = await requestPermission();

      // denied 일 경우 다시 권한 요청
      if (locationResult === 'denied') {
        locationResult = await requestPermission();
      }

      console.log('Location Permission Result: ', locationResult);

      // 알림 권한 요청
      let notificationResult = await requestPushPermission();

      if (notificationResult === 'denied') {
        notificationResult = await requestPushPermission();
      }
      console.log('Notification Permission Result: ', notificationResult);
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    const listenToNotifications = () => {
      try {
        onNotificationOpenedAppFromQuit();
        listentoBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };
    listenToNotifications();
  }, []);

  return (
    <AuthProvider>
      <TextTypeProvider>
        <RootNavigation />
      </TextTypeProvider>
    </AuthProvider>
  );
};

export default App;
