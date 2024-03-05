import React from 'react';
import {
  Modal,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';

const LoadingUserModal = ({isVisible, joinCnt, memberCnt, onClose}) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>잠시만 기다려 주세요..</Text>
          {/* 닫기 버튼 */}
          <TouchableOpacity onPress={onClose}>
            <Text>닫기</Text>
          </TouchableOpacity>
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
    backgroundColor: Colors.grey,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
  },
});

export default LoadingUserModal;
