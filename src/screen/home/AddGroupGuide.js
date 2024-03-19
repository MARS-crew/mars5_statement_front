import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
import {scale, verticalScale, moderateScale} from '../../constants/Scale';
import LocalImage from '../../components/image/LocalImage';
import CustomButton from '../../components/button/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {postCreateGroup} from '../../api/PostData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../../context/AuthContext';
import {getSuggest} from '../../api/GetData';

const AddGroupGuide = () => {
  const {setGroupId} = useLogin();
  const navigation = useNavigation();
  const moveToGuide = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('user');
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        const data = {
          name: userData.name + "'s Group",
          img: userData.picture,
          memberEmail: [''],
        };
        const createGroupResponse = await postCreateGroup(data);
        const response = await getSuggest(createGroupResponse.data.groupId);
        setGroupId(createGroupResponse.data.groupId);

        navigation.navigate('TeamName', response.data);
      } else {
        console.log('No user data found');
      }
    } catch {}
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.logo]}>co:mit</Text>
      </View>
      <View style={styles.detail}>
        <Text style={[styles.welcome, styles.text]}>Welcome !</Text>
        <Text style={[styles.cs, styles.text]}>
          Welcome, new member! Please add a new group.
        </Text>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          title={'Add a new group'}
          buttonColor={Colors.green}
          onPress={moveToGuide}
          fontColor={Colors.white}></CustomButton>
      </View>
    </View>
  );
};

export default AddGroupGuide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  header: {
    alignSelf: 'flex-start',
    flex: 2,
  },
  detail: {
    flex: 2,
    alignItems: 'center',
  },
  bottom: {
    flex: 2,
  },
  text: {
    color: Colors.black,
    fontFamily: 'NotoSansEN',
  },
  logo: {
    fontSize: scale(30),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: moderateScale(30),
  },
  welcome: {
    fontSize: moderateScale(30),
    marginBottom: moderateScale(12),
    fontFamily: 'NotoSansEN',
    fontWeight: 'bold',
  },
  cs: {
    textAlign: 'center',
    width: scale(297),
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
});
