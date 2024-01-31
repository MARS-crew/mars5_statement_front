import React from 'react';
import { StyleSheet } from 'react-native';
import { onGoogleButtonPress } from '../../Api/GoogleLogin/GoogleLoginApi';
import Colors from '../../constants/Colors';
import { moderateScale } from '../../constants/Scale';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../Button/CustomButton';

const GoogleLoginButton = () => {
  const navigation = useNavigation();
  return (
    <CustomButton
      title="Sign in with Google"
      buttonColor={Colors.white}
      fontColor={Colors.green}
      fontSize={moderateScale(16)}
      width={moderateScale(200)}
      height={moderateScale(40)}
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'), navigation.navigate('TeamName'))
      }
      style={styles.buttonContainer}
    />
  );
};
const styles = StyleSheet.create({
});
export default GoogleLoginButton;
