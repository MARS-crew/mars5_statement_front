import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../constants/Scale';

const SuccessModal = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.successText}>Login Successful!</Text>
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
  successText: {
    fontSize: moderateScale(18),
    color: Colors.green,
    marginBottom: moderateScale(10),
  },
});

export default SuccessModal;
