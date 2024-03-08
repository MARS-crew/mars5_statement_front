// LogoTitle.js
import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import {TextStyles} from '../../constants/TextStyles';
import {moderateScale} from '../../constants/Scale';
import MemberModal from '../modal/MemberModal';

const LogoTitle = ({team}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.contents}>
          <Image
            style={styles.logo}
            source={
              team[0].img
                ? {uri: team[0].img}
                : require('../../assest/images/image2.png')
            }
          />
          <Text style={[TextStyles.title]}>{team[0].name}</Text>
        </View>
      </TouchableOpacity>
      <MemberModal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        onClose={() => setModalVisible(false)}
        MemberData={team[1]}
      />
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(44),
    height: moderateScale(44),
    marginRight: 10,
  },
});
