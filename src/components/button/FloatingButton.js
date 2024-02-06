import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import { moderateScale } from '../../constants/Scale';
import NewPostSvg from '../../assest/images/list/NewPostSvg';

const FloatingButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <NewPostSvg></NewPostSvg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 70,
    right: moderateScale(24),
    backgroundColor: Colors.green,
    borderRadius: moderateScale(10),
    width: moderateScale(50),
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;
