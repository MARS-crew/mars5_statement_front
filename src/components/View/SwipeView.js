/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Swipelist from 'react-native-swipeable-list-view';
import {scale,verticalScale,moderateScale} from '../../constants/Scale'
import Colors from '../../constants/Colors'
import {TextStyles} from '../../constants/TextStyles'
import HumanButton from '../Button/HumanButton';
import RoundButton from '../Button/ChapterButton';


const SwipeView = () => (
  <Swipelist
    data={[{}]}
    renderRightItem={() => (
      <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={[TextStyles.semiBold]}> 코드 리뷰 해보아요 </Text>
        <Text style={[TextStyles.normal, TextStyles.placeholder]}> 2024-01-02 </Text>
      </View>
    )}
    renderHiddenItem={() => (
      <View style={{flexDirection: 'row'}}>
        <RoundButton></RoundButton>
        <HumanButton></HumanButton>
      </View>
    )}
    rightOpenValue={scale(88)}
    closeOnRowPress={true}
  />
);

const styles = {
  container: {
    width: '100%',
    height: scale(44),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: Colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center'
  },

  rightAction: {
    flex: 1,
    height: scale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SwipeView;
