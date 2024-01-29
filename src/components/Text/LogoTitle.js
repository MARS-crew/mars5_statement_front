// LogoTitle.js
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Colors from '../../constants/Colors';
import { TextStyles } from '../../constants/TextStyles';
import { moderateScale } from '../../constants/Scale';

const LogoTitle = ({teamName}) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../Assest/Images/image2.png')}
    />
    <Text style={[TextStyles.title]}>{teamName}</Text>
  </View>
);

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(44),
    height: moderateScale(44),
    marginRight: 10
  },
});
