import React, {useState, useEffect} from 'react';
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
import MemberChooseButton from '../../components/button/MemberChooseButton';
import Colors from '../../constants/Colors';
import back from '../../assest/images/header/back.png';
import check from '../../assest/images/header/check.png';
import {TextStyles} from '../../constants/TextStyles';
import {getSuggest} from '../../api/GetData';

const NewTopicChooseMember = ({route}) => {
  const {selectedType, groupnum} = route.params;
  const navigation = useNavigation();

  const [memberIdArray, setMemberIdArray] = useState([]);
  const [memberNameArray, setMemberNameArray] = useState([]);
  const [memberIMGArray, setMemberIMGArray] = useState([]);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [selectedButtons, setSelectedButtons] = useState(
    new Array(memberIdArray.length).fill(false),
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSuggest(groupnum);
        setMemberIdArray(
          data.data.groupMembers.map(member => member.groupMemberId),
        );
        setMemberNameArray(data.data.groupMembers.map(member => member.name));
        setMemberIMGArray(data.data.groupMembers.map(member => member.img));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleCheck = () => {
    const selectedMemberIds = memberIdArray.filter(
      (_, index) => selectedButtons[index],
    );
    const selectedMemberName = memberNameArray.filter(
      (_, index) => selectedButtons[index],
    );
    console.log('selectedMemberIds:', selectedMemberIds);
    navigation.navigate('NewTopicTitle', {
      selectedType,
      selectedButtons: selectedMemberIds,
      selectedMemberName,
    });
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
            {memberNameArray.map((button, index) => (
              <View key={index} style={styles.buttonWrapper}>
                <MemberChooseButton
                  text={button}
                  onPress={() => toggleButton(index)}
                  selected={selectedButtons[index]}
                  backgroundImage={memberIMGArray[index]}
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
