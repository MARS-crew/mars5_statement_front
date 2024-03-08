import React, {useState, useEffect} from 'react';
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import {Text, BackHandler, View, TouchableOpacity, Modal} from 'react-native';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import {useLogin} from '../../context/AuthContext';
import ExitModal from '../../components/modal/ExitModal';
import LoadingModal from '../../components/modal/LoadingModal';

const Home = () => {
  const {data} = useLogin();
  const navigation = useNavigation();
  const route = useRoute();
  const [DATA, setDATA] = useState([]);
  const [groupMembers, setGroupMembers] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const backHandler = () => {
      if (isFocused) {
        BackHandler.exitApp();
        return true;
      }
    };
    const subscription = navigation.addListener('beforeRemove', e => {
      if (!isFocused) {
        return;
      }
      e.preventDefault();
      backHandler();
    });
    const responseData = route.params ? route.params : null;
    setGroupMembers(responseData.groupMembers);
    return () => subscription();
  }, [navigation, isFocused]);

  useEffect(() => {
    const fetchData = async () => {
      const {IdData, nameData, imgData} = await data;

      if (IdData.length > 0) {
        const newDATAsr = IdData.map((id, index) => ({
          teamid: id,
          teamName: nameData[index],
          imageurl: imgData[index],
        }));
        setDATA(newDATAsr);
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  if (loading) {
    return <LoadingModal />;
  }

  return (
    <>
      <DrawerNavigation DATA={DATA} groupMembers={groupMembers} />
      <ExitModal
        visible={showModal}
        onConfirm={handleExit}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Home;
