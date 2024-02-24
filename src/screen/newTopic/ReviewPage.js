import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import back from '../../assest/images/header/back.png';
import check from '../../assest/images/header/check.png';
import {TextStyles} from '../../constants/TextStyles';
import {postFetchData} from '../../api';

const ReviewPage = ({route}) => {
  const navigation = useNavigation();
  const [review, setReview] = useState('');

  const {title, text, selectedType, selectedButtons, member, ChapterId} =
    route.params;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const onChangeText = inputText => {
    setReview(inputText);
  };
  const handleChooseMember = async () => {
    const response = await postFetchData(`/api/v1/share/summary/${ChapterId}`, {
      summary: review,
    });
    console.log(response);
    navigation.reset({
      index: 0,
      routes: [{name: 'TeamName'}],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Image source={back} style={styles.backBtn} />
              <Text style={styles.title}>{selectedType}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChooseMember}>
            <Image source={check} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.centeredText, {marginLeft: -windowWidth / 1.5}]}>
        멤버들 의견
      </Text>

      <View
        style={[
          styles.scrollViewContainer,
          {height: windowHeight / 5, width: windowWidth / 1.125},
        ]}>
        <ScrollView style={styles.scrollView}>
          {member.map((name, index) => (
            <View key={index} style={styles.box}>
              <Text style={[TextStyles.normal, styles.textUser]}>{name}</Text>
              <Text style={[TextStyles.semiBold, styles.text]}>{text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {width: windowWidth * 0.9, height: windowHeight / 4},
        ]}>
        <TextInput
          onChangeText={onChangeText}
          value={review}
          placeholder="후기를 작성해 주세요."
          i
          style={TextStyles.normal}
          placeholderTextColor="#D3D6D3"
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  centeredText: {
    color: Colors.black,
    marginTop: '20%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'NotoSansEN',
    marginBottom: '3%',
  },
  scrollViewContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: Colors.grey,
    borderWidth: 1,
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
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.grey,
    padding: 2,
    borderBottomWidth: 1,
  },
  text: {flex: 1},
  textUser: {
    fontWeight: 'bold',
    marginRight: 7,
  },
  buttonContainer: {
    marginTop: 40,
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
