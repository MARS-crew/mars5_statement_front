import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {NativeModules, PermissionsAndroid, Platform} from 'react-native';
import {Notifications} from 'react-native-notifications';

export async function requestPushPermission() {
  try {
    if (Platform.OS === 'android') {
      const authorizationStatus = await messaging().requestPermission({
        sound: true,
        announcement: true,
        options: ['Alert', 'Badge', 'Sound'],
      });

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Notification Permission',
          message:
            '이 앱은 일부 기능을 제공하기 위해 알림에 대한 액세스가 필요합니다.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return 'granted';
      } else {
        return 'denied';
      }
    }
  } catch (error) {
    console.log('Android Push Notification error: ', error);
  }
}

const usePushNotification = () => {
  const listentoBackgroundNotifications = async () => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      remoteMessage => {
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
    listenToForegroundNotifications,
    listentoBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  };
};

export default usePushNotification;
