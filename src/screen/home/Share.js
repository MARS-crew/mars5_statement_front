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

const Share = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {changeTextType, textType} = useTextType();
  const {data} = useLogin();
  const {shareData} = data;
  // console.log(shareData);

  useFocusEffect(
    React.useCallback(() => {
      if (textType !== 'Share') {
        changeTextType();
      }
      console.log(textType);
    }, [textType, changeTextType]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {shareData.length > 0 ? (
          shareData.map(item => (
            <SwipeView key={item.suggestId.toString()} DATA={item} />
          ))
        ) : (
          <View style={styles.noData}>
            <Text>No share data available</Text>
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

export default Share;
