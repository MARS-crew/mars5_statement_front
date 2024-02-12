import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '506348598249-cr7ob0od99ajtujf92qq2396f0i94hjk.apps.googleusercontent.com',
});

export const onGoogleButtonPress = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken, user} = await GoogleSignin.signIn();
    //아래 console.log 지우지 마세요
    console.log(idToken);
    console.log(user);
    if (idToken) {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
