import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import BigList from 'react-native-big-list';
import Colors from '../../constants/Colors';
import RoundButton from '../button/ChapterButton';
import HumanButton from '../button/HumanButton';
import HumanSvg from '../../assest/images/list/HumanSvg';
import { scale } from '../../constants/Scale';
import { TextStyles } from '../../constants/TextStyles';
import EmptyDataView from './EmptyDataView';
import { getFetchData, postFetchData } from '../../api';
import { useNavigation } from '@react-navigation/native';

const ListSwipeRef = React.createRef();

const ItemLeft = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row', width: scale(88) }}>
      <RoundButton suggestId={item.suggestId}></RoundButton>
      <HumanButton
        suggestId={item.suggestId}
        texttype={item.type}></HumanButton>
    </View>
  );
};

const Item = ({ item, index }) => {
  const [joinCnt, setJoinCnt] = useState('');
  const [memberCnt, setMemberCnt] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  console.log(item)
  const handleClick = async (suggestId, type) => {
    try {
      setLoading(true);
      if (type == "share") {
        const response = await getFetchData(`/api/v1/share/chapter/${suggestId}`);
        if (response.data.summaryList[0].summary == null) {
          const response1 = await postFetchData(
            `/api/v1/share/join/${response.data.summaryList[0].chapterId}`,
          );
          const member = response1.data.map(member => member.name);
          const memberId = response1.data.map(member => member.userId);
          const ChapterId = response.data.summaryList[0].chapterId;

          const intervalId = setInterval(async () => {
            const response2 = await getFetchData(
              `/api/v1/share/join/${response.data.summaryList[0].chapterId}`,
            );

            setJoinCnt(response2.data.joinCnt);
            setMemberCnt(response2.data.memberCnt);
            if (response2.data.joinCnt === response2.data.memberCnt) {
              clearInterval(intervalId);
              setLoading(false);

              navigation.navigate('NewTopicWrite', {
                title: response.data.suggest,
                selectedType: 'share',
                selectedButtons: memberId,
                member,
                ChapterId,
              });
            }
          }, 2000);
        } else {
          setLoading(false);
        }
      } else if (type == "send") {
        const response = await getFetchData(`/api/v1/send/chapter/${suggestId}`);
        if (response.data.summaryList[0].summary == null) {
          const response1 = await postFetchData(
            `/api/v1/send/join/${response.data.summaryList[0].chapterId}`,
          );
          console.log(response1, "응답 원")

          const member = response1.data.map(member => member.name);
          const memberId = response1.data.map(member => member.userId);
          const ChapterId = response.data.summaryList[0].chapterId;
          const intervalId = setInterval(async () => {
            const response2 = await getFetchData(
              `/api/v1/send/join/${response.data.summaryList[0].chapterId}`,
            );

            console.log(response2, "응답 투")
            setJoinCnt(response2.data.joinCnt);
            setMemberCnt(response2.data.memberCnt);
            if (response2.data.joinCnt === response2.data.memberCnt) {
              clearInterval(intervalId);
              setLoading(false);
              console.log(member, "멤버")
              navigation.navigate('NewTopicWriteSend', {
                title: response.data.suggest,
                selectedType: 'send',
                selectedButtons: memberId,
                member,
                ChapterId,
              });
            }
          }, 2000);
        }
      }

    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <TouchableOpacity
      key={item.suggestId.toString()}
      onPress={() => {
        handleClick(item.suggestId, item.type);
        console.log('Send');
      }}>
      <Swipeable
        ref={ref}
        leftThreshold={0}
        rightThreshold={100}
        overshootRight={false}
        renderRightActions={() => <ItemLeft item={item} />}
        onSwipeableOpen={direction => {
          switch (direction) {
            case 'right':
              if (ListSwipeRef.current && ListSwipeRef.current?.id !== index) {
                ListSwipeRef.current.self?.close();
              }

              ListSwipeRef.current = {
                id: index,
                self: ref.current,
              };
              break;

            case 'left':
              break;

            default:
              break;
          }
        }}>
        <View style={styles.container}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[TextStyles.semiBold]}>
            {item.suggest}
          </Text>
          <Text style={[TextStyles.normal, TextStyles.placeholder]}>
            {' '}
            {item.reg_dt}{' '}
          </Text>
        </View>
      </Swipeable>
    </TouchableOpacity>
  );
};
const renderEmpty = () => <EmptyDataView />;

const SwipeAbleList = ({ sendData }) => {
  return (
    <BigList
      style={{ flex: 1 }}
      itemHeight={44 + 4}
      keyExtractor={(item, index) => `item-${index}`}
      renderItem={({ item, index }) => <Item item={item} index={index} />}
      renderEmpty={renderEmpty}
      placeholder={true}
      data={sendData}
    />
  );
};

const styles = {
  container: {
    width: '100%',
    height: scale(44),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: Colors.grey,
    flexDirection: 'row',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rightAction: {
    flex: 1,
    height: scale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SwipeAbleList;
