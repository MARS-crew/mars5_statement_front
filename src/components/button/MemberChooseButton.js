import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../constants/Colors';

const MemberChooseButton = ({text, onPress, selected, backgroundImage}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected && styles.selectedButton,
        backgroundImage ? styles.imageButton : null,
      ]}
      onPress={onPress}>
      {backgroundImage ? (
        <Image source={{uri: backgroundImage}} style={styles.image} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    elevation: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 16,
  },
  image: {
    width: '99%',
    height: '99%',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default MemberChooseButton;
