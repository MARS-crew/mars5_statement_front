import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../constants/Scale';

const MemberModal = ({isVisible, setVisible, onClose, MemberData}) => {
  return (
    <Modal
      // animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableOpacity
        onPress={() => setVisible(false)}
        style={styles.modalBackdropPress}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {MemberData.map((member, index) => (
              <Image
                key={index}
                style={styles.logo}
                source={{uri: member.img}}
              />
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    top: 70,
    left: 20,
    alignItems: 'flex-start',
  },
  modalContent: {
    backgroundColor: Colors.blue,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: 320,
  },
  modalBackdropPress: {
    flex: 1,
  },
  logo: {
    width: moderateScale(44),
    height: moderateScale(44),
    marginRight: 10,
    marginBottom: 10,
  },
});

export default MemberModal;
