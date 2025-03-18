import axios from "axios";
import config from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const http = (headers?: any) =>  {
    const user = JSON.parse(localStorage.getItem('user') || '{}');  //get user details, added empty string for null 
    const access_token = 'Bearer' + user?.token;

    return axios.create({
        baseURL: config.REACT_BASE_URL,
        timeout: config.Timeout,
        headers: {
            ...headers,
            authorization: access_token
        }
    })
}
export default http;