import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-app-ea83a.firebaseio.com/'
});

export default instance;