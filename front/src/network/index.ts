import axios from 'axios';

export const API_URL = 'http://localhost:8888/';

const apiAxios = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

export default apiAxios;
