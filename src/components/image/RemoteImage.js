import React from 'react';
import {Image} from 'react-native';

const RemoteImage = ({uri, style}) => {
  return <Image source={{uri: uri}} style={style} />;
};

export default RemoteImage;
