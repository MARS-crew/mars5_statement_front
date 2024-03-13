import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../constants/Scale';

const ErrorModal = ({errorCode, onClose}) => {
  // 에러 코드 props로 받기
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!errorCode}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.errorText}>Error: {errorCode}</Text>
          <Text style={styles.closeText} onPress={onClose}>
            Close
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    alignItems: 'center',
  },
  errorText: {
    fontSize: moderateScale(18),
    color: Colors.black,
    marginBottom: moderateScale(10),
  },
  closeText: {
    fontSize: moderateScale(16),
    color: Colors.black,
    textDecorationLine: 'underline',
  },
});

export default ErrorModal;
