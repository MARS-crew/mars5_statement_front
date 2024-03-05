/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Swipelist from 'react-native-swipeable-list-view';
import {scale, verticalScale, moderateScale} from '../../constants/Scale';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
import HumanButton from '../button/HumanButton';
import RoundButton from '../button/ChapterButton';

const SwipeView = ({DATA}) => (
  <Swipelist
    data={[{}]}
    renderRightItem={() => (
      <View style={styles.container}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[TextStyles.semiBold]}>
          {DATA.suggest}
        </Text>
        <Text style={[TextStyles.normal, TextStyles.placeholder]}>
          {' '}
          {DATA.reg_dt}{' '}
        </Text>
      </View>
    )}
    renderHiddenItem={() => (
      <View style={{flexDirection: 'row'}}>
        <RoundButton suggestId={DATA.suggestId} />
        <HumanButton suggestId={DATA.suggestId} texttype={DATA.type} />
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
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rightAction: {
    flex: 1,
    height: scale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SwipeView;
