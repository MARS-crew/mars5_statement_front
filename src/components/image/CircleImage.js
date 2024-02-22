import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
import {moderateScale, scale} from '../../constants/Scale';
import Colors from '../../constants/Colors';
import RemoteImage from '../image/RemoteImage';

const CircleImage = ({url, isSelected}) => {
    return (
    <View style={[styles.ImageContainer, isSelected && styles.selected]}>
        <View style={isSelected && styles.secondImageContainer}>
            <RemoteImage uri={url} style={[styles.memberImage]}></RemoteImage>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    selected: {
        backgroundColor: Colors.black,
    },
    memberImage: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: 50,
    },
    ImageContainer: {
        width: moderateScale(88),
        height: moderateScale(88),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    secondImageContainer: {
        width: moderateScale(84),
        height: moderateScale(84),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
})

export default CircleImage;
