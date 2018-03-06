import axios from 'axios'

import store from 'src-store'

const service = axios.create({
    timeout: 5000
})

// baseURL
// axios.defaults.baseURL = 'https://api.github.com';

// Http  Interceptor
// Add Authorization  to HTTP's Header every request, the content of AUthorization is token
service.interceptors.request.use(
    config => {
        if (store.state.user.token) {
            config.headers.Authorization = `token ${store.state.user.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
export default service;