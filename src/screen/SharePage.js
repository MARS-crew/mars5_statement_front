import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CaptureAndShareButton from '../Components/CaptureAndShareButton';
const SharePage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* 다른 컴포넌트들 */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CaptureAndShareButton />
      </View>
    </SafeAreaView>
  );
};

export default SharePage;
