import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {scale, moderateScale} from '../../constants/Scale';
import RemoteImage from './RemoteImage';

const GroupImage = ({url, isSelected}) => {
  return (
    <View style={[styles.ImageContainer, isSelected && styles.selected]}>
      <View style={isSelected && styles.secondImageContainer}>
        <RemoteImage uri={url} style={[styles.image]}></RemoteImage>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  selected: {
    backgroundColor: Colors.black,
  },
  ImageContainer: {
    width: moderateScale(68),
    height: moderateScale(68),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  secondImageContainer: {
    width: moderateScale(64),
    height: moderateScale(64),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
    backgroundColor: Colors.black,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});

export default GroupImage;
