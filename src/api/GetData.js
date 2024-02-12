import {getFetchData, getFetchDataWithParam} from './index';

//공유 회차별 조회
export const getRoundShare = async suggestId => {
  const endpoint = '/api/v1/share/chapter/';
  return getFetchDataWithParam(endpoint, {suggestId});
};

//메인페이지 조회
export const getSuggest = async groupId => {
  const endpoint = '/api/v1/group/' + groupId;
  // return getFetchDataWithParam(endpoint, {groupId});
  return getFetchDataWithParam(endpoint);
};
