import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '506348598249-cr7ob0od99ajtujf92qq2396f0i94hjk.apps.googleusercontent.com',
});

export const onGoogleButtonPress = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
  }
};
