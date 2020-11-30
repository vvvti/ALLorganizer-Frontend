import {axios} from './rest/axios';

export const getUserValues = () => {
    return axios.get(`api/users`);
};
