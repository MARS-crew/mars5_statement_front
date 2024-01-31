import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MemberChooseButton from '../../Components/Button/MemberChooseButton';
import Colors from '../../Constants/Colors';
import back from '../../Assest/Images/header/back.png';
import check from '../../Assest/Images/header/check.png';
import {TextStyles} from '../../Constants/TextStyles';

const NewTopicChooseMember = () => {
  const navigation = useNavigation();
  const buttons = [
    'Button 1',
    'Button 2',
    'Button 3',
    'Button 4',
    'Button 5',
    'Button 6',
    'Button 7',
    'Button 8',
    'Button 9',
    'Button 10',
    'Button 11',
    'Button 12',
    'Button 13',
  ];
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [selectedButtons, setSelectedButtons] = useState(
    new Array(buttons.length).fill(false),
  );

  const handleCheck = () => {
    navigation.navigate('NewTopicTitle');
  };

  const toggleButton = index => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[index] = !newSelectedButtons[index];
    setSelectedButtons(newSelectedButtons);
  };

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
          <TouchableOpacity onPress={handleCheck}>
            <Image source={check} style={styles.share} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.centeredText}>Select Member</Text>
      <View style={styles.selectedTextContainer}>
        <Text style={TextStyles.semiBold}>1명 선택</Text>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {width: windowWidth * 0.9, height: windowHeight * 0.5},
        ]}>
        <ScrollView contentContainerStyle={styles.buttonContent}>
          <View style={styles.buttonRow}>
            {buttons.map((button, index) => (
              <View key={index} style={styles.buttonWrapper}>
                <MemberChooseButton
                  text={button}
                  onPress={() => toggleButton(index)}
                  selected={selectedButtons[index]}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewTopicChooseMember;

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
  },
  selectedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
  },

  buttonContainer: {
    marginTop: 10,
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
  buttonWrapper: {
    width: '29%',
    aspectRatio: 1,
    margin: '2%',
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
