import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import back from '../../assest/images/header/back.png';
import {TextStyles} from '../../constants/TextStyles';

const NewTopicPage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChooseMember = selectedType => {
    navigation.navigate('NewTopicChooseMember', {selectedType});
  };
  const handleGoBack = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.head}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <View style={styles.headerLeft}>
              <Image source={back} style={styles.backBtn} />
              <Text style={styles.title}>Add a writing</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.centeredText}>Select Type</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.Sharebutton}
            onPress={() => handleChooseMember('Share')}>
            <Text style={(styles.buttonText, TextStyles.titleWhite)}>
              Share
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Sendbutton}
            onPress={() => handleChooseMember('send')}>
            <Text style={(styles.buttonText, TextStyles.titleWhite)}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={TextStyles.semiBold}>Move Home?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.okButton} onPress={handleConfirm}>
                <Text style={styles.okButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
export default NewTopicPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    color: Colors.black,
    marginTop: -Dimensions.get('window').height / 4,
    fontSize: 18,
    fontFamily: 'NotoSansEN',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  Sharebutton: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 40,
    elevation: 4,
  },
  Sendbutton: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
  head: {
    alignItems: 'center',
    top: 20,
  },
  header: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    alignContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    width: 8,
    height: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    left: 20,
  },
  share: {
    width: 40,
    height: 32,
  },
  modalContainer: {
    flex: 1,

    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 2.6,
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
