import React from 'react';
import {TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import HumanSvg from '../../assest/images/list/HumanSvg';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../constants/Scale';
import {useTextType} from '../../context/TextTypeContext';

const HumanButton = ({suggestId, texttype}) => {
  const navigation = useNavigation();
  const handlePerson = () => {
    if (texttype === 'share') {
      navigation.navigate('PersonShare', {suggestId: suggestId});
    } else if (texttype === 'send') {
      navigation.navigate('PersonSend', {suggestId: suggestId});
    }
  };

  return (
    <TouchableOpacity style={[styles.rightAction]} onPress={handlePerson}>
      <HumanSvg></HumanSvg>
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

export default HumanButton;
