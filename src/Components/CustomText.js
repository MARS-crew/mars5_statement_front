// CustomText.js
import React from 'react';
import {Text} from 'react-native';

const CustomText = ({style, children, fontSize, fontColor}) => {
  return <Text style={[{fontSize, color: fontColor}, style]}>{children}</Text>;
};

export default CustomText;
