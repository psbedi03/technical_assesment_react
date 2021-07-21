/* eslint-disable prettier/prettier */
import axios from 'axios';
import { axiosInstance } from '../utils/services';
import { apiUrl, getSpecies } from './urlEndPoints';

export const loadSpecies = async () => {
    const response = await axios.get(getSpecies);
    return response.data;
};

export const loginFun = (payload) => {
    return axiosInstance.post(apiUrl.auth.login, payload);
};
