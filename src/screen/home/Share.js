import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import SwipeView from '../../components/view/SwipeView';
import Colors from '../../constants/Colors';
import {useTextType} from '../../context/TextTypeContext';
import {getSuggest} from '../../api/GetData';
import {useLogin} from '../../context/AuthContext';

const Share = () => {
  const navigation = useNavigation();
  const {changeTextType, textType} = useTextType();
  const {isLogin} = useLogin();

  const [suggest, setSuggest] = useState(null);
  const suggestData = JSON.stringify(suggest, null, 2);
  const groupId = 2; // 임의 그룹 아이디

  const handlePersonShare = () => {
    navigation.navigate('PersonShare');
  };

  const handleRoundShare = () => {
    navigation.navigate('RoundShare', {data: suggest});
  };

  useFocusEffect(
    React.useCallback(() => {
      if (textType !== 'Share') {
        changeTextType();
      }
      console.log(textType);
    }, [textType, changeTextType]),
  );

  useEffect(() => {
    if (isLogin) {
      const loadData = async () => {
        try {
          const responseData = await getSuggest(groupId);
          setSuggest(responseData.data.groupSuggests);
          console.log(
            'suggest:',
            JSON.stringify(responseData.data.groupSuggests, null, 2),
          );
        } catch (error) {
          console.error('데이터 조회 실패:', error);
        }
      };

      loadData();
    }
  }, [isLogin, groupId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {suggest?.map(data => (
          <SwipeView
            key={data.suggestId.toString()}
            DATA={data}
            handleRoundSend={handleRoundShare}
            handlePersonSend={handlePersonShare}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.lightgrey,
  },
});

export default Share;
