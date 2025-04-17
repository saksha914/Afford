import axios from 'axios';
import { getToken, removeToken } from '../utils/auth';
import { API_BASE_URL, API_HEADERS, API_TIMEOUT } from '../constants/api';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: API_HEADERS.JSON
});

instance.interceptors.request.use(
    (config) => {
        const Token = getToken();
        if (Token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    removeToken();
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Access denied');
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:

                    console.error('Server error');
                    break;
                default:
                    console.error('An error occurred');
            }
        }
        return Promise.reject(error);
    }
);

export default instance; 