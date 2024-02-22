import React from 'react';
import {Image} from 'react-native';

const RemoteImage = ({uri, style}) => {
  return <Image source={uri ? {uri: uri} : require('../../assest/images/groupimage.png')} 
  onError={() => require('../../assest/images/groupimage.png')} 
  style={style} />;
};

export default RemoteImage;
