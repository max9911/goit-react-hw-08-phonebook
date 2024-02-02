import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://65b40690770d43aba47ad75e.mockapi.io/',
});

export const apiAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
