import axios from 'axios'
axios.interceptors.response.use(function (response) {
    if (response.data.code === 0) {
        return response.data.users
    }
    else {
        return Promise.reject('error');
    }
});

export default axios