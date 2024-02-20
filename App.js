import React, {useState, useEffect} from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';
import {TextTypeProvider} from './src/context/TextTypeContext';
import {AuthProvider} from './src/context/AuthContext';
import {requestPermission} from './src/utils/requestPermission';

const App = () => {
  useEffect(() => {
    // 위치 권한 요청
    const requestLocationPermission = async () => {
      let result = await requestPermission();

      // denied 일 경우 다시 권한 요청
      if (result === 'denied') {
        result = await requestPermission();
      }

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
