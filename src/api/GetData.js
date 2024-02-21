import {getFetchData, getFetchDataWithParam} from './index';

//공유 회차별 조회
export const getRoundShare = async suggestId => {
  const endpoint = '/api/v1/share/chapter/' + suggestId;
  return getFetchDataWithParam(endpoint);
};

//공유 회차별 조회 상세
export const getRoundShareDetail = async chapterId => {
  const endpoint = '/api/v1/share/detail/' + chapterId;
  return getFetchDataWithParam(endpoint);
};

//전달 회차별 조회
export const getRoundSend = async suggestId => {
  const endpoint = '/api/v1/send/chapter/' + suggestId;
  return getFetchDataWithParam(endpoint);
};

//메인페이지 조회
export const getSuggest = async groupId => {
  const endpoint = '/api/v1/group/' + groupId;
  // return getFetchDataWithParam(endpoint, {groupId});
  return getFetchDataWithParam(endpoint);
};
