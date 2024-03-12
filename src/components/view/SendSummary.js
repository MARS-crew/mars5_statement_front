import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
const Sendsummary = ({item}) => {
  const date = new Date(item.regDt);
  const formattedDate = date.toISOString().split('T')[0];

  return (
    <View style={styles.summarybox}>
      <View style={styles.round}>
        <View style={styles.top}>
          <Text style={[TextStyles.title]}>{item.seq}th</Text>
          <Text style={[TextStyles.location]}>{item.location}</Text>
        </View>
        <Text style={[TextStyles.normal, TextStyles.placeholder]}>
          {formattedDate}
        </Text>
      </View>
      <View style={styles.summary}>
        <Text style={[TextStyles.normal]}>{item.message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  summarybox: {
    width: '100%',
    borderColor: Colors.grey,
    borderTopWidth: 1,
    backgroundColor: Colors.white,
    gap: 24,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  round: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  location: {
    marginTop: 18,
    fontSize: 10,
    marginLeft: 10,
    color: Colors.grey,
    fontFamily: 'NotoSansKR',
  },
});

export default Sendsummary;
