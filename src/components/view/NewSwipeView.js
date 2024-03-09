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
import EmptyDataView from './EmptyDataView';

const ListSwipeRef = React.createRef();

const ItemLeft = ({item}) => {
  return <View style={{flexDirection: 'row', width: scale(88)}}>
        <RoundButton suggestId={item.suggestId} ></RoundButton>
        <HumanButton suggestId={item.suggestId} texttype={item.type} ></HumanButton>
    </View>;
};

const Item = ({item, index}) => {
  const ref = useRef();

  return (
    <Swipeable
      ref={ref}
      leftThreshold={0} 
      rightThreshold={100}
      overshootRight={false}
      renderRightActions={() => <ItemLeft item={item}/>}
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
const renderEmpty = () => <EmptyDataView />;

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