import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Constants/Colors';

const NewTopicPage = () => {
  const navigation = useNavigation();

  const handleChooseMember = () => {
    navigation.navigate('NewTopicChooseMember');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Select Type</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.Sharebutton}
          onPress={handleChooseMember}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Sendbutton}
          onPress={handleChooseMember}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewTopicPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredText: {
    color: Colors.black,
    marginTop: -Dimensions.get('window').height / 4,

    fontSize: 18,
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
  },
  Sendbutton: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
