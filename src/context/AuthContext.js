import React, {createContext, useContext, useState, useEffect} from 'react';
import {getSuggest} from '../api/GetData';

const Context = createContext({});

export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    shareData: [],
    sendData: [],
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
          setData({shareData: shareFiltered, sendData: sendFiltered});
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
