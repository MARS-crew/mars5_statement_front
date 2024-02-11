import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CaptureAndShareButton from '../../components/button/CaptureAndShareButton';

const PersonShare = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PersonSendDetailPage');
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <CaptureAndShareButton />
      </TouchableOpacity>
      <Text>사람별 share</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonShare;
