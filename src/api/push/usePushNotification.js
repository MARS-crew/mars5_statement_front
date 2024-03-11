import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {NativeModules, PermissionsAndroid, Platform} from 'react-native';

const usePushNotification = () => {
  const requestUserPermission = async () => {
    if (Platform.OS === 'android') {
      const authorizationStatus = await messaging().requestPermission();
      console.log('authorizationStatus: ', authorizationStatus);
      try {
        const fcmToken = await messaging().getToken();
        console.log('fcmToken: ', fcmToken);
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );
          // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //   console.log('Android 13이상, 알림권한 허용');
          //   if (fcmToken) {
          //     if (
          //       NativeModules.DotReactBridge &&
          //       NativeModules.DotReactBridge.setPushToken
          //     ) {
          //       NativeModules.DotReactBridge.setPushToken(fcmToken);
          //     } else {
          //       console.error(
          //         'NativeModules.DotReactBridge is null, undefined, or setPushToken method is not available.',
          //       );
          //     }
          // NativeModules.DotReactBridge.setPushToken(fcmToken);
          // }
          // } else {
          //   if (fcmToken) {
          //     NativeModules.DotReactBridge.setPushToken(fcmToken);
          //   }
          // }
        }
      } catch (error) {
        console.log('Android error: ', error);
      }
    }
  };
  const listentoBackgroundNotifications = async () => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log(
          ' BACKGROUND - a new message: ',
          JSON.stringify(remoteMessage),
        );
      },
    );

    return unsubscribe;
  };
  const listenToForegroundNotifications = async () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        ' FOREGROUND - a new message : ',
        JSON.stringify(remoteMessage),
      );
    });

    return unsubscribe;
  };

  const onNotificationOpenedAppFromBackground = async () => {
    const unsubscribe = messaging().onNotificationOpenedApp(
      async remoteMessage => {
        console.log(
          'App opened from Background by tapping notification: ',
          JSON.stringify(remoteMessage),
        );
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromQuit = async () => {
    const message = await messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'App opened from QUIT by tapping notification: ',
            JSON.stringify(message),
          );
        }
      });
  };

  return {
    requestUserPermission,
    listenToForegroundNotifications,
    listentoBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  };
};

export default usePushNotification;
