import getFetchData from './index';
import getFetchDataWithParam from './index';

//공유 회차별 조회
export const getRoundShare = async suggestId => {
  const endpoint = '/api/v1/share/chapter/';
  return getFetchDataWithParam(endpoint, {suggestId});
};
