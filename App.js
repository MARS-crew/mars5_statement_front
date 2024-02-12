import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';
import {TextTypeProvider} from './src/context/TextTypeContext';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <TextTypeProvider>
        <RootNavigation />
      </TextTypeProvider>
    </AuthProvider>
  );
};

export default App;
