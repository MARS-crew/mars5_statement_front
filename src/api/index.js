import axios from 'axios';
import {BASE_URL} from '../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios 객체
const createClient = async () => {
  const TOKEN = await AsyncStorage.getItem('accessToken');

  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return client;
};

// GET 호출
// 파라메타 없는 경우
export const getFetchData = async endpoint => {
  try {
    const client = await createClient();
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
    const client = await createClient();
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

// POST 호출
export const postFetchData = async (endpoint, data) => {
  try {
    const client = await createClient();
    const response = await client.post(endpoint, data);
    if (response.data.code === 200 && response.data.status === 'OK') {
      return response.data;
    } else {
      throw new Error(response.data.message || 'API 호출 실패');
    }
  } catch (error) {
    console.error('API 호출 중 문제 :', error);
    throw error;
  }
};
