import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CaptureAndShareButton from '../../components/button/CaptureAndShareButton';

const RoundSend = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('RoundSendDetailPage');
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <CaptureAndShareButton />
      </TouchableOpacity>
      <Text style={styles.text}>회차별</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});

export default RoundSend;
