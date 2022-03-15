import axios from 'axios';

const API_PATH = 'https://api.themoviedb.org/3/';

const apiInstance = axios.create({
  baseURL: API_PATH
});

export default apiInstance;
