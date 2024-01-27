import React from 'react';
import {Text, StyleSheet} from 'react-native';

const NewTopicPage = () => {
  return <Text style={styles.text}>새로운 주제를 만들어 보아요</Text>;
};
export default NewTopicPage;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
