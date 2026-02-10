
import axios from "axios";

const api = `https://viacep.com.br/ws/`  

const Api = axios.create({
    baseURL: api
});
export default Api;