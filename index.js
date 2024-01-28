import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FirebaseInit from './src/Api/GoogleLogin/FirebaseInit';

FirebaseInit();

AppRegistry.registerComponent(appName, () => App);
