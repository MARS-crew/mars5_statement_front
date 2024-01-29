// 긁어서 갖다 쓰세요.
import Colors from '../../constants/Colors';
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

const Header = () => {
  <View style={styles.head}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image style={styles.backBtn} />
        <Text style={styles.title}>Share</Text>
      </View>
      <Image style={styles.share} />
    </View>
  </View>;
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
    justifyContent: '',
    left: 20,
  },
  share: {
    width: 40,
    height: 32,
  },
});
