import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {naverApiInit} from './naverConfig';

export const getLocation = async () => {
  try {
    const coords = await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          resolve({latitude, longitude});
        },
        error => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
          distanceFilter: 1,
        },
      );
    });
    const endpoint = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?orders=addr&output=json&coords=${coords.longitude},${coords.latitude}`;

    const response = await axios.get(endpoint, {
      headers: {
        'X-NCP-APIGW-API-KEY-ID': naverApiInit().client_id,
        'X-NCP-APIGW-API-KEY': naverApiInit().client_secret,
      },
    });
    const region = response.data.results[0].region;
    let location = '';
    if (region) {
      // const location = JSON.stringify(region, null, 2);
      location =
        region.area1.name + ' ' + region.area2.name + ' ' + region.area3.name;
    } else {
      console.error('region data를 찾을 수 없습니다.');
    }
    return location;
  } catch (error) {
    console.error('Error in naverGeocodingApi: ', error);
    return false;
  }
};
