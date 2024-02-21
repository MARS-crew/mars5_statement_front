import {
    Text,   
    StyleSheet,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import { TextStyles } from '../../constants/TextStyles';
import { scale, moderateScale } from '../../constants/Scale';
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
                <Text style={TextStyles.title}>Share</Text>
            </View>
            <Image source={shareBtn} style={styles.share} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    head: {
        height : scale(68),
        alignItems: 'center',
        padding : 20,
        backgroundColor : Colors.white
      },
      header: {
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: moderateScale(32),
        alignContent: 'center',
        alignItems: 'center',
      },
      headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(16),
      },
      backBtn: {
        width: 8,
        height: 16,
      },
      share: {
        width: 40,
        height: 32,
      },
});

export default MainHeader