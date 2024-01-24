import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('RoundSend');
  };
  return <Button title="Go to PersonSend" onPress={handleButtonPress} />;
};
export default Home;
