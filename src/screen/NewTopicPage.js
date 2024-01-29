import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import Colors from '../Constants/Colors';

const NewTopicPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Select Type</Text>
    </View>
  );
};

export default NewTopicPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    color: Colors.black,
    marginTop: -Dimensions.get('window').height / 2,
  },
});
