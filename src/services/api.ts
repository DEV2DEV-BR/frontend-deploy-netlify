import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333' : 'https://producao.com'
});

export default instance;