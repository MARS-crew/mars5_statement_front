import {postFetchData} from '.';

//공유 회차별 조회
export const postCreateGroup = async data => {
  const endpoint = '/api/v1/group/create';
  return postFetchData(endpoint, data);
};
