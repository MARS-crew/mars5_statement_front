import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
import {scale, moderateScale} from '../../constants/Scale';
import backBtn from '../../assest/images/header/back.png';
import shareBtn from '../../assest/images/header/shareBtn.png';
const MainHeader = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.head}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={handleBack}>
            <Image source={backBtn} style={styles.backBtn} />
          </TouchableOpacity>
          <Text style={styles.title}>Share</Text>
        </View>
        <Image source={shareBtn} style={styles.share} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    top: 20,
  },
  header: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    height: 60,
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
    fontFamily: 'NotoSansEN',
  },
  share: {
    width: 40,
    height: 32,
  },
});

export default MainHeader;
