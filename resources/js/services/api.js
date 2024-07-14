 resources/js/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-laravel-app-url/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setService = async (data) => {
    return api.post('/set-service', data);
};

export const handleLogin = async () => {
    return api.post('/handle-login');
};
