import {postFetchData} from '.';

//공유 회차별 조회
export const postCreateGroup = async data => {
  const endpoint = '/api/v1/group/create';
  return postFetchData(endpoint, data);
};

//로그인 & 회원가입
export const postLogin = async data => {
  const endpoint = '/api/v1/auth/login';
  return postFetchData(endpoint, data);
};

export const postReissue = async data => {
  const endpoint = '/api/v1/auth/reissue';
  return postFetchData(endpoint, data);
};

//send 상세조회 책갈피
export const postBookmark = async data => {
  const endpoint = '/api/v1/send/bookmark';
  return postFetchData(endpoint, data);
};
