import React, {createContext, useContext, useState, useEffect} from 'react';
import {getSuggest} from '../api/GetData';

const Context = createContext({});

export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    shareData: [],
    sendData: [],
    IdData: [],
    imgData: [],
    nameData: [],
  });

  useEffect(() => {
    const loadData = async () => {
      if (isLogin) {
        try {
          const groupId = 1; // 예시 그룹 ID
          const responseData = await getSuggest(groupId);

          const shareFiltered = responseData.data.groupSuggests.filter(
            item => item.type === 'share',
          );
          const sendFiltered = responseData.data.groupSuggests.filter(
            item => item.type === 'send',
          );
          const groupIds = responseData.data.myGroups.map(item => item.groupId);
          const imgs = responseData.data.myGroups.map(item => item.img);
          const names = responseData.data.myGroups.map(item => item.name);

          setData({
            shareData: shareFiltered,
            sendData: sendFiltered,
            IdData: groupIds,
            imgData: imgs,
            nameData: names,
          });
        } catch (error) {
          console.error('데이터 조회 실패:', error);
        }
      }
    };

    loadData();
  }, [isLogin]);

  return (
    <Context.Provider value={{isLogin, setIsLogin, data}}>
      {children}
    </Context.Provider>
  );
};

export const useLogin = () => useContext(Context);
