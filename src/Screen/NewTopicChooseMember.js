import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MemberChooseButton from '../Components/Button/MemberChooseButton';
import Colors from '../Constants/Colors';

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

  const handleChooseMember = () => {
    navigation.navigate('NewTopicChooseMember');
  };

  const toggleButton = index => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[index] = !newSelectedButtons[index];
    setSelectedButtons(newSelectedButtons);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Select Member</Text>
      <View style={styles.selectedTextContainer}>
        <Text style={styles.selectedText}>1명 선택</Text>
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
    </View>
  );
};

export default NewTopicChooseMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  centeredText: {
    color: Colors.black,
    marginTop: '10%',
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
  selectedText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '600',
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
});
