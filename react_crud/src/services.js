import axios from 'axios';
const BASE_BACKEND = 'https://jsonplaceholder.typicode.com';

export default {
    getAllPhotos: () =>
        axios.get(`${BASE_BACKEND}/photos`),
    addPhoto: (photo) => 
        axios.post(`${BASE_BACKEND}/photos`,photo),
    editPhoto: (photoId) =>
        axios.get(`${BASE_BACKEND}/photos/${photoId}`),
    updatePhoto: (photo) => 
        axios.put(`${BASE_BACKEND}/${photo.id}`, photo),
    deletePhoto: (photoId) => 
        axios.delete(`${BASE_BACKEND}/photos/${photoId}`)
}

