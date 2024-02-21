import React from 'react';
import {Image} from 'react-native';

const RemoteImage = ({uri, style}) => {
  return <Image source={uri ? {uri: uri} : require('../../assest/images/image2.png')} style={style} />;
};

export default RemoteImage;
