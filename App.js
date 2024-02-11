import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';
import {TextTypeProvider} from './src/context/TextTypeContext';

const App = () => {
  return (
    <TextTypeProvider>
      <RootNavigation />
    </TextTypeProvider>
  );
};

export default App;
