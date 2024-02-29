import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
import {scale, verticalScale, moderateScale} from '../../constants/Scale';
import LocalImage from '../../components/image/LocalImage';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.logo]}>co:mit</Text>
      </View>
      <View style={styles.background}>
        <LocalImage
          source={require('../../assest/images/loginimage.png')}
          style={[styles.backgroundImage]}
        />
      </View>
      <View style={styles.detail}>
        <Text style={[styles.welcome, styles.text]}>Welcome !</Text>
        <Text style={[styles.cs, styles.text]}>
          Connect and grow together on a journey of collective progress
        </Text>
      </View>
      <View style={styles.bottom}>
        <GoogleLoginButton></GoogleLoginButton>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.green,
  },
  header: {
    alignSelf: 'flex-start',
    flex: 2,
  },
  background: {
    flex: 3,
  },
  detail: {
    flex: 2,
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
  },
  text: {
    color: Colors.white,
    fontFamily: 'NotoSansEN',
  },
  logo: {
    fontSize: scale(30),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: moderateScale(30),
  },
  welcome: {
    fontSize: moderateScale(30),
    marginBottom: moderateScale(12),
    fontFamily: 'NotoSansEN',
    fontWeight: 'bold',
  },
  cs: {
    textAlign: 'center',
    width: scale(297),
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: scale(206),
    height: scale(164),
  },
});
