import axios from 'axios';

const instance = axios.create({
    headers: {
        'Authorization': localStorage.getItem('token')
    }
});

export default instance;