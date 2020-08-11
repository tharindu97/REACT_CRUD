import axios from 'axios';
const BASE_BACKEND = 'https://jsonplaceholder.typicode.com';

export default {
    getAllPhotos: () =>
        axios.get(`${BASE_BACKEND}/photos`)
}

