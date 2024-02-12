import React from 'react';
import {StyleSheet} from 'react-native';
import {onGoogleButtonPress} from '../../api/googleLogin/GoogleLoginApi';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../constants/Scale';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../button/CustomButton';
import {useLogin} from '../../context/AuthContext';

const GoogleLoginButton = () => {
  const navigation = useNavigation();
  const {setIsLogin} = useLogin();

  const handleGoogleSignIn = async () => {
    const loggedIn = await onGoogleButtonPress();
    if (loggedIn) {
      console.log('Signed in with Google!');
      setIsLogin(true);
      navigation.navigate('TeamName');
    } else {
      console.error('Google 로그인 실패');
      setIsLogin(false);
    }
  };

  return (
    <CustomButton
      title="Sign in with Google"
      buttonColor={Colors.white}
      fontColor={Colors.green}
      fontSize={moderateScale(16)}
      width={moderateScale(200)}
      height={moderateScale(40)}
      onPress={handleGoogleSignIn}
      style={styles.buttonContainer}
    />
  );
};
const styles = StyleSheet.create({});
export default GoogleLoginButton;
