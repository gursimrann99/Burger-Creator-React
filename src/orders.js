import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://react-burger-8cf4d.firebaseio.com/'
});
// axiosInstance.interceptors.request.use(request => {
//     return request;
// }, error => {
//     return Promise.reject(error);
// })
// axiosInstance.interceptors.response.use(response => {
//     return response;
// }, error => {
//     console.log(error)
//     return Promise.reject(error);
// })
//export default instance;