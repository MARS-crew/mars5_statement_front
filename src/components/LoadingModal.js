import React from 'react';
import {Modal, ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingModal = ({isVisible}) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingModal;
