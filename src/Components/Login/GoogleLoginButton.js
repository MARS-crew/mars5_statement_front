import React, {useState} from 'react';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import firebase from '@react-native-firebase/app';

// // Firebase 초기화 (App.js 또는 다른 초기 설정 파일에서 수행)
// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     // Firebase 구성 객체
//   });
// }

const GoogleLoginButton = () => {
  GoogleSignin.configure({
    webClientId:
      '506348598249-cr7ob0od99ajtujf92qq2396f0i94hjk.apps.googleusercontent.com',
  });

  const [idToken, setIdToken] = useState('');

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();

      console.log('idToken : ', idToken);
      setIdToken(idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('googleCredential : ', googleCredential);
      const res = await auth().signInWithCredential(googleCredential);
      console.log('res: ', res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
};

export default GoogleLoginButton;
