import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';
import {useTextType} from '../../context/TextTypeContext';
import {useLogin} from '../../context/AuthContext';

const Send = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {changeTextType, textType} = useTextType();
  const {data} = useLogin();
  const {sendData} = data;
  useFocusEffect(
    React.useCallback(() => {
      if (textType !== 'Send') {
        changeTextType();
      }
      console.log(textType);
    }, [textType, changeTextType]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {sendData.length > 0 ? (
          sendData.map(item => (
            <SwipeView key={item.suggestId.toString()} DATA={item} />
          ))
        ) : (
          <View style={styles.noData}>
            <Text>No send data available</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.lightgrey,
  },
});

export default Send;
