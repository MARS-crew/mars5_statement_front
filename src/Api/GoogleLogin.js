// GoogleLoginAPI.js
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';
import RNFirebase from 'react-native-firebase';

global.firebase = RNFirebase.initializeApp({
  debug: true,
});
// Google SDK 초기화
GoogleSignin.configure({
  webClientId: '여기에-webClientId를-입력하세요', // Firebase 콘솔에서 얻은 webClientId
});

export async function onGoogleButtonPress() {
  // Google Play 서비스가 있는지 확인
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

  // 사용자의 ID 토큰 가져오기
  const {idToken} = await GoogleSignin.signIn();

  // Google 인증 정보 생성
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // 사용자를 인증 정보로 로그인
  return auth().signInWithCredential(googleCredential);
}
