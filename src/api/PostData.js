import {postFetchData, postFetchNoneData} from '.';

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

//share 상세조회 하트
export const postHeart = async (chapterId, opinionId) => {
  const endpoint = `/api/v1/share/detail/${chapterId}`;
  const data = {shareId: opinionId};

  return postFetchData(endpoint, data);
};

export const postAddSuggest = async (suggestId, memberIds) => {
  const endpoint = `/api/v1/chapter/create/${suggestId}`;
  const data = {memberIds: memberIds};
  return postFetchData(endpoint, data);
};
