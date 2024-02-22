import React from 'react';
import {StyleSheet} from 'react-native';
import {onGoogleLogin} from '../../api/googleLogin/GoogleLoginApi';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../constants/Scale';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../button/CustomButton';
import {useLogin} from '../../context/AuthContext';
import {getSuggest} from '../../api/GetData';

const GoogleLoginButton = () => {
  const navigation = useNavigation();
  const {setIsLogin, setGroupId} = useLogin();

  const handleGoogleSignIn = async () => {
    const userInfo = await onGoogleLogin();
    if (userInfo.code == 200) {
      console.log('Signed in with Google!');
      const response = await getSuggest(userInfo.data.lastGroupId);
      setGroupId(userInfo.data.lastGroupId);
      setIsLogin(true);
      navigation.navigate('TeamName', response.data);
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
