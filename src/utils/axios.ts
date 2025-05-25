import axios, {AxiosInstance} from "axios";

const apiInstance: AxiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
});

export default apiInstance;