import axios from "axios";
export const mainApi = axios.create({
    baseURL: 'api'
});
