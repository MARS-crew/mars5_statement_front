import axios from 'axios';
import {BASE_URL} from '../utils/config';

// Axios 객체
const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET 호출
// 파라메타 없는 경우
export const getFetchData = async endpoint => {
  try {
    const response = await client.get(endpoint);
    if (response.data.code === 200 && response.data.status === 'OK') {
      return response.data;
    } else {
      throw new Error(response.data.message || 'API 호출 실패');
    }
  } catch (error) {
    console.error('API 호출 중 문제 :', error);
    throw error; // 오류를 다시 던져서 호출자가 처리
  }
};

// GET 호출
// 파라메타 있는 경우
export const getFetchDataWithParam = async (endpoint, params = {}) => {
  try {
    const response = await client.get(endpoint, {params});
    if (response.data.code === 200 && response.data.status === 'OK') {
      return response.data;
    } else {
      throw new Error(response.data.message || 'API 호출 실패');
    }
  } catch (error) {
    console.error('API 호출 중 문제 :', error);
    throw error; // 오류를 다시 던져서 호출자가 처리
  }
};

{
  /* 이전 코드 (by.min) */
}

// const client = axios.create({
//   baseURL: BASE_URL,
// });
// client.interceptors.request.use(async config => {
//   const token = '123123';
//   //AsyncStorage로 토큰 저장후 가져오는게 좋을듯
//   if (!token) {
//     // 토큰 재발급
//     // 로그아웃
//   }

//   if (token) {
//     config.headers.Authorization = 'Bearer : ' + token;
//   }
// });

// client.interceptors.response.use(res => {
//   if (res.status === 401) {
//     // 인증 실패
//     // 토큰 재발급
//   }
// });

// export default client;
