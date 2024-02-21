import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
import Colors from '../../constants/Colors';
import { TextStyles } from '../../constants/TextStyles';
const Summary = ({item}) => {
    const handlePress = ({item}) => {
        setSelectedMember(item);
    };

    return (
        <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.summarybox}>
                <View style={styles.round}>
                    <Text style={[TextStyles.title]}>{item.chapter_id}th</Text>
                    <Text style={[TextStyles.normal, TextStyles.placeholder]}>{item.reg_dt}</Text>
                </View>
                <View style = { styles.summary }>
                    <Text style={[TextStyles.normal]}>{item.opinion}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    summarybox: {
        width: '100%',
        borderColor: Colors.grey,
        borderTopWidth: 1,
        backgroundColor : Colors.white,
        gap : 24,
        paddingHorizontal : 20,
        paddingVertical : 16,
    },
    round: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems : "center",
        backgroundColor : Colors.white
    },
});

export default Summary