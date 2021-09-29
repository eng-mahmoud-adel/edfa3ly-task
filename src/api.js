import axios from 'axios';

const request = axios.create({
    baseURL: 'http://test-api.edfa3ly.io',
});

export default request;