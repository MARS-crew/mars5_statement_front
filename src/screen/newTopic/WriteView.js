import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Colors from '../../constants/Colors';
import back from '../../assest/images/header/back.png';
import check from '../../assest/images/header/check.png';
import {useNavigation} from '@react-navigation/native';
import {TextStyles} from '../../constants/TextStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WriteView = ({route}) => {
  const navigation = useNavigation();
  const {
    title,
    text,
    selectedType,
    selectedButtons,
    member,
    ChapterId,
    opinions,
    constructorId,
  } = route.params;
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const myId = await AsyncStorage.getItem('userId');
      const parsedId = JSON.parse(myId);
      setUserId(parsedId);
    };
    fetchUserId();
  }, []);

  const handleChooseMember = () => {
    console.log('');
    if (userId === constructorId) {
      navigation.navigate('ReviewPage', {
        title,
        text,
        selectedType,
        selectedButtons,
        member,
        ChapterId,
        opinions,
      });
    } else {
      navigation.reset({index: 0, routes: [{name: 'TeamName'}]});
    }
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
      <Text style={styles.centeredText}>{title}</Text>

      <ScrollView style={styles.scrollView}>
        {member &&
          member.map((memberName, index) => (
            <View
              key={index}
              style={[styles.box, index === 0 && styles.firstBox]}>
              <Text style={[TextStyles.title, styles.textUser]}>
                {memberName}
              </Text>
              <Text style={[TextStyles.normal, styles.text]}>
                {opinions[index]}
              </Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WriteView;

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
  scrollView: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  firstBox: {
    borderTopWidth: 1,
  },
  box: {
    borderColor: Colors.grey,
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
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
  text: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  textUser: {
    marginHorizontal: 5,
  },
});
