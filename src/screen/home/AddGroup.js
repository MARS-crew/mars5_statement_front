import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import back from '../../assest/images/header/back.png';
import {TextStyles} from '../../constants/TextStyles';
import check from '../../assest/images/header/check.png';
import {launchImageLibrary} from 'react-native-image-picker';
import plusBtn from '../../assest/images/PlusBtn.png';
import CustomModal from '../../components/CustomModal';
import minusBtn from '../../assest/images/minusBtn.png';
import {BASE_URL} from '../../utils/config';
const AddGroup = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [emails, setEmails] = useState(['']);

  const sendDataToBackend = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}api/v1/group/create`,
        {name: groupName, img: imageSource, memberEmail: emails},
        {
          headers: {
            Authorization:
              ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNzA3NzEzNzI5LCJleHAiOjE3MDc3MTU1Mjl9.kvnZYiu6NWi5G38-R817W04WRTg66z3yqvcNzDqsexw',
          },
        },
      );
      console.log('백엔드 :', response.data);
      navigation.goBack();
    } catch (error) {
      console.error('에러 :', error);
    }
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

  const onSelectImage = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});
      if (!response.didCancel && !response.error) {
        const {uri} = response.assets[0];
        setImageSource({uri});
      } else {
        console.log('이미지 업로드 취소');
      }
    } catch (error) {
      console.log('에러남 : ', error);
    }
  };

  const handleAddEmail = () => {
    setEmails([...emails, '']);
  };

  const handleRemoveEmail = index => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleEmailChange = (text, index) => {
    const newEmails = [...emails];
    newEmails[index] = text;
    setEmails(newEmails);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.head}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <View style={styles.headerLeft}>
              <Image source={back} style={styles.backBtn} />
              <Text style={styles.title}>Add a writing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendDataToBackend}>
            <Image source={check} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.selectImageButton}
        onPress={onSelectImage}>
        {imageSource ? (
          <Image source={imageSource} style={styles.selectedImage} />
        ) : (
          <View style={styles.imageButtonContainer}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Group Name</Text>
      <TextInput
        placeholder="Write Group Name"
        placeholderTextColor="#D3D6D3"
        style={styles.input}
        onChangeText={setGroupName}
        value={groupName}
      />

      <View style={styles.labelContainer}>
        <Text style={styles.labelAdd}>Add Member</Text>
        <TouchableOpacity onPress={handleAddEmail}>
          <Image source={plusBtn} style={styles.plusBtn} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {emails.map((email, index) => (
          <View key={index} style={styles.emailContainer}>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter Email"
              placeholderTextColor="#D3D6D3"
              value={email}
              onChangeText={text => handleEmailChange(text, index)}
            />
            <TouchableOpacity onPress={() => handleRemoveEmail(index)}>
              <Image source={minusBtn} style={styles.minusBtn} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <CustomModal
        isVisible={isModalVisible}
        onConfirm={handleConfirm}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};
export default AddGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    alignItems: 'center',
    top: 20,
  },
  scrollView: {
    flex: 1,
    marginBottom: 10,
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
  selectImageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').width / 4,
  },
  imageButtonContainer: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: 40,
    color: 'gray',
  },
  selectImageText: {
    marginTop: 5,
    color: 'gray',
    fontSize: 16,
  },
  selectedImage: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    marginTop: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: Colors.black,
  },
  labelAdd: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    color: Colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: Colors.lightgrey,
    height: Dimensions.get('window').width / 5,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 8,
    color: Colors.black,
  },
  addMemberText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  plusBtn: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginTop: 10,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: Colors.lightgrey,
    height: Dimensions.get('window').width / 9,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    flex: 1,
    color: Colors.black,
  },
  minusBtn: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').width / 9,
    marginRight: 20,
  },
});
