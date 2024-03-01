import auth, {firebase} from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {BASE_URL} from '../../utils/config';
import {postLogin} from '../PostData';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId:
    '506348598249-cr7ob0od99ajtujf92qq2396f0i94hjk.apps.googleusercontent.com',
});

export const onGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken, user} = await GoogleSignin.signIn();
    const fcmToken = await messaging().getToken();
    //아래 console.log 지우지 마세요
    console.log(idToken);
    console.log(user);
    const data = {
      uid: idToken,
      email: user.email,
      name: user.name,
      picture: user.photo,
      fcmToken: fcmToken,
    };
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const response = await postLogin(data);
    await AsyncStorage.setItem('user', JSON.stringify(data));
    await AsyncStorage.setItem(
      'accessToken',
      JSON.stringify(response.data.refreshToken),
    );

    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};
