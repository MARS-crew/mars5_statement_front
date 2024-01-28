import React from 'react';
import {Image} from 'react-native';

// require로 받을때
const LocalImage = ({source, style}) => {
  return <Image source={source} style={style} />;
};

// uri로 받을때
const RemoteImage = ({uri, style}) => {
  return <Image source={{uri: uri}} style={style} />;
};

const CustomImage = ({source, uri, style}) => {
  if (source) {
    return <LocalImage source={source} style={style} />;
  }

  if (uri) {
    return <RemoteImage uri={uri} style={style} />;
  }

  return null;
};

export default CustomImage;
