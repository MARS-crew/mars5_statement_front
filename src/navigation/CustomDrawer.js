import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {moderateScale, scale} from '../constants/Scale';
import {TextStyles} from '../constants/TextStyles';
import AddSvg from '../assest/images/svg/AddSvg';
import RemoteImage from '../components/image/RemoteImage';
import GroupImage from '../components/image/GroupImage';
import { useLogin } from '../context/AuthContext';

const CustomDrawer = props => {
  const {setGroupId} = useLogin();
  const {state, descriptors, navigation} = props;
  //현재 그룹 이름
  const activeRouteName = state.routes[state.index].name;
  return (
    <View style={styles.container}>
      <View style={[styles.view, styles.header]}>
        <Text style={TextStyles.title}> {activeRouteName}</Text>
      </View>
      <DrawerContentScrollView style={styles.view}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isSelected = options.title === activeRouteName;
          return (
            <TouchableOpacity
              style={styles.button}
              key={route.key}
              onPress={() => {
                navigation.navigate(route.name);
                setGroupId(props.groups[index].teamid)
              }}>
              <GroupImage
                url={options.groupImageURL}
                isSelected={isSelected}></GroupImage>
              <Text style={[TextStyles.title, styles.groupname]}>
                {options.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>
      <View style={[styles.view, styles.footer]}>
        <TouchableOpacity
          style={styles.addGroup}
          //클릭 시 그룹 추가로 이동
          onPress={() => navigation.navigate('AddGroup')}>
          <AddSvg></AddSvg>
          <Text style={TextStyles.title}> New Group </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  view: {
    backgroundColor: Colors.white,
    padding: 20,
  },
  header: {
    marginTop: moderateScale(8),
  },
  footer: {
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  addGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    gap: moderateScale(8),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: moderateScale(8),
  },
  groupname: {
    marginLeft: moderateScale(10),
  },
});
export default CustomDrawer;
