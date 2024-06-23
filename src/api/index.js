import axios from "axios";
// axios.defaults.withCredentials= true;
const defaultAxios = axios.create({
    baseURL: "http://103.195.238.178:8000/api",
});
defaultAxios.defaults.headers.common['Authorization']='Bearer '+ localStorage.getItem('token');
export default defaultAxios