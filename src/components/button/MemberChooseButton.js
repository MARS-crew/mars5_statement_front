// ButtonComponent.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const MemberChooseButton = ({text, onPress, selected}) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selectedButton]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    flex: 1,
  },
  selectedButton: {
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default MemberChooseButton;
