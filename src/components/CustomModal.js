// CustomModal.js

import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';
import {TextStyles} from '../constants/TextStyles';

const CustomModal = ({isVisible, onConfirm, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={TextStyles.semiBold}>Move Home?</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={styles.okButton} onPress={onConfirm}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -Dimensions.get('window').height / 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 6.5,
  },
  modalButtonsContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  okButton: {
    backgroundColor: Colors.green,
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 3,
    height: 50,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomModal;
