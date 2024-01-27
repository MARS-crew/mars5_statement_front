// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './DrawerNavigator';

// const RootNavigation = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default RootNavigation;

import React from 'react';
import {Text} from 'react-native';
import GoogleLoginButton from '../Components/Login/GoogleLoginButton';

const RootNavigation = () => {
  return <GoogleLoginButton />;
};

export default RootNavigation;
