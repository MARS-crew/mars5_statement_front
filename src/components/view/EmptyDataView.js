import React from 'react';
import {Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';

const EmptyDataView = () => {
  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center', height: 100},
      ]}>
      <Text style={[TextStyles.normal]}>
        No topics have been written. Please add a new topic.
      </Text>
    </View>
  );
};

export default EmptyDataView;
