// SwipableView.js

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Swipelist from 'react-native-swipeable-list-view';

const SwipeView = ({handlePersonSend, handleRoundSend}) => (
  <Swipelist
    data={[{}]}
    renderRightItem={() => (
      <View style={styles.container}>
        <Text style={styles.styledText}> React Native</Text>
      </View>
    )}
    renderHiddenItem={() => (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.rightAction, {backgroundColor: '#bfbfbf'}]}
          onPress={handleRoundSend}>
          <Text>사람별</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rightAction, {backgroundColor: 'red'}]}
          onPress={handlePersonSend}>
          <Text>인물별</Text>
        </TouchableOpacity>
      </View>
    )}
    rightOpenValue={200}
    closeOnRowPress={true}
  />
);

const styles = {
  container: {
    height: 60,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  styledText: {
    color: '#111',
    fontWeight: 'bold',
  },

  rightAction: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export default SwipeView;
