import axios from "axios";

const API = axios.create({
    baseURL: `:5002`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use(
    (config) => {
        console.log("Making request to:", config.url)
        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error)
    }
);

API.interceptors.response.use(
    (response) => {
        console.log("Response received from:", response.config.url);
        return response;
    },
    (error) => {
        if (error.response) {
            // Handle specific HTTP errors
            console.error(`Error ${error.response.status}:`, error.response.data.message || "Unknown error");
        } else {
            console.error("Network or server error:", error.message);
        }
        return Promise.reject(error);
    }

);

export default API;