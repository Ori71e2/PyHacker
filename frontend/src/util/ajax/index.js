import axios from 'axios'

import store from 'src-store'

const service = axios.create({
    timeout: 5000;
})

// baseURL
// axios.defaults.baseURL = 'https://api.github.com';

// Http  Interceptor