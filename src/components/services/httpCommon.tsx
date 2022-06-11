import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apirestfaerterj.herokuapp.com',
});

export default api;