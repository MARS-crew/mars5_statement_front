import React from 'react';
import {Modal, ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const LoadingUserModal = ({isVisible, joinCnt, memberCnt}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>잠시만 기다려 주세요..</Text>
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
  loadingText: {
    color: 'black',
  },
});

export default LoadingUserModal;
