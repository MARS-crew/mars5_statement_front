import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirebaseInit from './src/api/googleLogin/FirebaseInit';
import messaging from '@react-native-firebase/messaging';

FirebaseInit();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('killed state notification: ', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
