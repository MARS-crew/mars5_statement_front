import axios from 'axios';
import {BASE_URL} from '../Utils/config';

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
