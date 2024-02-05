import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Constants/Colors';
import back from '../../Assest/Images/header/back.png';
import check from '../../Assest/Images/header/check.png';
import {TextStyles} from '../../Constants/TextStyles';

const NewTopicWrite = ({route}) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const {title} = route.params;

  const handleChooseMember = () => {
    navigation.navigate('NewTopicTitle');
  };

  const onChangeText = inputText => {
    setText(inputText);
  };
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Image source={back} style={styles.backBtn} />

              <Text style={styles.title}>Add a Writing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={check} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.centeredText}>{title}</Text>
      <View
        style={[
          styles.buttonContainer,
          {width: windowWidth * 0.9, height: windowHeight * 0.6},
        ]}>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="아무거나 입력하세요..."
          i
          style={TextStyles.normal}
          placeholderTextColor="#D3D6D3"
        />
      </View>
    </SafeAreaView>
  );
};
export default NewTopicWrite;

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
  },
  selectedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
  },

  buttonContainer: {
    marginTop: 40,
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexGrow: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
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
});
