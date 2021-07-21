/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_URL, API_PREFIX } from '../../config';

export const axiosInstance = axios.create({
    baseURL: `${API_URL}${API_PREFIX}`,
});
