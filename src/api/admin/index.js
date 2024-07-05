import axios from "axios";
// axios.defaults.withCredentials= true;
const defaultAdminAxios = axios.create({
    baseURL: "http://103.195.238.178:8000/api/admin",
});
defaultAdminAxios.defaults.headers.common['Authorization']='Bearer '+ localStorage.getItem('adminToken');
export default defaultAdminAxios