import axios from 'axios';
import {BASE_URL} from '../utils/config';

// const client = axios.create({
//   baseURL: BASE_URL,
// });

// client.interceptors.request.use(async config => {
//   const token = '123123';

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

const fetchData = async (
  endpoint,
  method = 'POST',
  data = null,
  token = null,
) => {
  try {
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error('Error Message:', error);
    throw error;
  }
};

export default fetchData;
