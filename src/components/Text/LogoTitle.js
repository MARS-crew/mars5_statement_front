// LogoTitle.js
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const LogoTitle = ({teamName}) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../Assest/Images/image2.png')}
    />
    <Text style={styles.title}>{teamName}</Text>
  </View>
);

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
