import React, {useState, useEffect} from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';
import {TextTypeProvider} from './src/context/TextTypeContext';
import {AuthProvider} from './src/context/AuthContext';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location to provide some functionality.',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return 'granted';
      } else {
        return 'denied';
      }
    }
  } catch (e) {
    console.log(e);
  }
}

const App = () => {
  useEffect(() => {
    // 위치 권한 요청
    const requestLocationPermission = async () => {
      const result = await requestPermission();
      console.log('Location Permission Result:', result);
    };

    requestLocationPermission();
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
