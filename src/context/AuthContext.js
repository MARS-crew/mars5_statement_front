import React, {createContext, useContext, useState, useEffect} from 'react';
import {getSuggest} from '../api/GetData';

const Context = createContext({});

export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [group, setGroup] = useState(null);
  const [data, setData] = useState({
    shareData: [],
    sendData: [],
    IdData: [],
    imgData: [],
    nameData: [],
    activeGroup: [],
  });

  useEffect(() => {
    const loadData = async () => {
      if (isLogin) {
        try {
          const responseData = await getSuggest(groupId);

          if (responseData.message == '속해있는 그룹이 없습니다.') {
            setData({
              activeGroup: 0,
            });
            return;
          }
          const shareFiltered = responseData.data.groupSuggests.filter(
            item => item.type === 'share',
          );
          const sendFiltered = responseData.data.groupSuggests.filter(
            item => item.type === 'send',
          );
          const groupIds = responseData.data.myGroups.map(item => item.groupId);
          const imgs = responseData.data.myGroups.map(item => item.img);
          const names = responseData.data.myGroups.map(item => item.name);

          const activeGroup = responseData.data.myGroups.filter(
            item => item.groupId === groupId,
          );

          setData({
            shareData: shareFiltered,
            sendData: sendFiltered,
            IdData: groupIds,
            imgData: imgs,
            nameData: names,
            activeGroup: activeGroup,
          });
        } catch (error) {
          console.error('데이터 조회 실패:', error);
        }
      }
    };

    loadData();
  }, [isLogin, groupId]);

  return (
    <Context.Provider value={{isLogin, setIsLogin, setGroupId, data}}>
      {children}
    </Context.Provider>
  );
};

export const useLogin = () => useContext(Context);
