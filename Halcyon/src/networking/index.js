import axios from 'axios';
import {API} from '../../constants';

export const api = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});
