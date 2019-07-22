import axios from 'axios';

export const axiosWithAuth = token => {

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};