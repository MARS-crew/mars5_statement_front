import React from 'react';
import {TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import RoundSvg from '../../assest/images/list/RoundSvg';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../constants/Scale';
import {useTextType} from '../../context/TextTypeContext';

const RoundButton = ({suggestId}) => {
  const navigation = useNavigation();
  const {textType} = useTextType();
  const handleRound = () => {
    if (textType === 'Share') {
      console.log('나 셰어');
      navigation.navigate('RoundShare', {suggestId: suggestId});
    } else if (textType === 'Send') {
      console.log('나 샌드');
      navigation.navigate('RoundSend', {suggestId: suggestId});
    }
  };

  return (
    <TouchableOpacity
      style={[styles.rightAction, {backgroundColor: Colors.green}]}
      onPress={handleRound}>
      <RoundSvg></RoundSvg>
    </TouchableOpacity>
  );
};
const styles = {
  rightAction: {
    flex: 1,
    height: scale(44),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },
};

export default RoundButton;
