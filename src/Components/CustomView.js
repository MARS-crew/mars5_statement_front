import React from 'react';
import {View} from 'react-native';

const CustomView = ({children, style}) => {
  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
        style,
      ]}>
      {children}
    </View>
  );
};

export default CustomView;
