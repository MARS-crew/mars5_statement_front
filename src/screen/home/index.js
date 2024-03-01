import React, {useState, useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {Text, BackHandler, View, TouchableOpacity, Modal} from 'react-native';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import {useLogin} from '../../context/AuthContext';
import ExitModal from '../../components/modal/ExitModal';
const Home = () => {
  const {data} = useLogin();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const backHandler = () => {
      if (isFocused) {
        setShowModal(true);
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
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <DrawerNavigation DATA={DATA} />
      <ExitModal
        visible={showModal}
        onConfirm={handleExit}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Home;
