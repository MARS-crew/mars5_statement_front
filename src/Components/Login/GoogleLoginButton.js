import React from 'react';
import {Button} from 'react-native';
import {onGoogleButtonPress} from '../../api/googleLogin/GoogleLoginApi';

const GoogleLoginButton = () => {
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
