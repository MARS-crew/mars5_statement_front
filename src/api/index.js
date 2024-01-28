import axios from 'axios';
import {BASE_URL} from '../utils/config';

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(async config => {
  const token = '123123';
  //AsyncStorage로 토큰 저장후 가져오는게 좋을듯
  if (!token) {
    // 토큰 재발급
    // 로그아웃
  }

  if (token) {
    config.headers.Authorization = 'Bearer : ' + token;
  }
});

client.interceptors.response.use(res => {
  if (res.status === 401) {
    // 인증 실패
    // 토큰 재발급
  }
});

export default client;
