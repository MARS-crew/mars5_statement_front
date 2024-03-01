import React, {useState, useEffect} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {Text, BackHandler, View, TouchableOpacity, Modal} from 'react-native';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import {useLogin} from '../../context/AuthContext';
import ExitModal from '../../components/modal/ExitModal';
const Home = () => {
  const {data} = useLogin();
  const navigation = useNavigation();
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // 뒤로가기 버튼 클릭 시 모달 표시
        setShowModal(true);
        return true; // 뒤로가기 동작 막음
      },
    );

    return () => backHandler.remove();
  }, []);

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
    // 종료 확인 시 앱 종료
    BackHandler.exitApp();
  };

  const handleCancel = () => {
    // 종료 취소 시 모달 닫기
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
