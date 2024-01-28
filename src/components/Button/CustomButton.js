import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({
  title,
  onPress,
  width,
  height,
  buttonColor,
  fontColor,
  fontSize,
}) => {
  const buttonStyle = {
    backgroundColor: buttonColor || 'blue',
    width,
    height,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  };

  const textStyle = {
    color: fontColor || 'white',
    fontSize: fontSize || 16,
    fontWeight: 'bold',
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default CustomButton;
