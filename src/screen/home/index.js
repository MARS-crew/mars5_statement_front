import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import {useLogin} from '../../context/AuthContext';

const Home = () => {
  const {data} = useLogin();
  const navigation = useNavigation();
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const {IdData, nameData, imgData} = await data;
      if (IdData.length > 0) {
        const newDATAsr = IdData.map((id, index) => ({
          teamid: id,
          teamName: nameData[index],
          imageurl: imgData[index],
        }));
        // console.log(newDATAsr)
        setDATA(newDATAsr);
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <DrawerNavigation DATA={DATA} />;
};

export default Home;
