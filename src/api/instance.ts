import axios from 'axios';

const API_PATH = 'https://api.themoviedb.org/3/';

console.log('token', process.env.NEXT_PUBLIC_API_TOKEN)

const apiInstance = axios.create({
  baseURL: API_PATH
});

apiInstance.interceptors.request.use(config => {
  config.url = `${config.url}?api_key=${process.env.NEXT_PUBLIC_API_TOKEN || ''}`;

  return config;
})

export default apiInstance;
