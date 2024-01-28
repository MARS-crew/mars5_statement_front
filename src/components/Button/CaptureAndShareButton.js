import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

const {width} = Dimensions.get('window');

const CaptureAndShareButton = () => {
  const viewRef = useRef(null);

  const handleCaptureAndShare = async () => {
    try {
      const uri = await viewRef.current.capture();

      const shareOptions = {
        title: 'Share Image',
        message: 'Check out this captured image!',
        url: uri,
      };

      const result = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ViewShot ref={viewRef} style={styles.captureContainer}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>오늘 저녁은 뭐지?</Text>
        <TouchableOpacity onPress={handleCaptureAndShare}>
          <Text style={styles.captureText}>캡처</Text>
        </TouchableOpacity>
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  captureContainer: {
    width: width,
    height: 70,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  captureText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CaptureAndShareButton;
