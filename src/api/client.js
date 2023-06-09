import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/'

export const client = axios.create({ baseURL : BASE_URL });

client.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token');
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
}, (error) =>{
  return Promise.reject(error);
});
