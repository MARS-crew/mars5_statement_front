import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import BigList from 'react-native-big-list';
import Colors from '../../constants/Colors';
import RoundButton from '../button/ChapterButton';
import HumanButton from '../button/HumanButton';
import HumanSvg from '../../assest/images/list/HumanSvg';
import { scale } from '../../constants/Scale';
import { TextStyles } from '../../constants/TextStyles';

const ListSwipeRef = React.createRef();
const DATA = {
    suggest_id: 1,
    suggest: '왜 사람은 잠을 자야만 하는가',
    SummaryList: [
      {
        chapter_id: 2,
        summary_id: 2,
        member_id: 2,
        member_name: '박지민',
        reg_dt: '2024-01-01',
        opinion: '다들 잠을 필요로 하는구나..',
      },
      {
        chapter_id: 1,
        summary_id: 1,
        member_id: 1,
        member_name: '백예나',
        reg_dt: '2024-01-05',
        opinion:
          '생각을 아무리 해도 왜 잠이 계속 오는건지 해결책을 낼 수 없었다.',
      },
    ],
  };

const ItemLeft = () => {
  return <View style={{flexDirection: 'row', width: scale(88)}}>
        <RoundButton></RoundButton>
        <HumanButton></HumanButton>
    </View>;
};

const Item = ({item, index}) => {
  const ref = useRef();
  const color = index % 2 === 0 ? '#BBB' : '#EEE';

  return (
    <Swipeable
      ref={ref}
      leftThreshold={0} 
      rightThreshold={100}
      overshootRight={false}
      renderRightActions={() => <ItemLeft />}
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
  );
};
const renderEmpty = () => <Text>헤헤</Text>;

const SwipeAbleList = ({sendData}) => {
  return (
    <BigList
      style={{flex: 1}}
      itemHeight={44 + 4}
      keyExtractor={(item, index) => `item-${index}`}
      renderItem={({item, index}) => <Item item={item} index={index} />}
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