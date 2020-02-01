import axios from 'axios';

const api = axios.create({
  baseURL: 'https://charler-node-api.herokuapp.com/',
});

export default api;
