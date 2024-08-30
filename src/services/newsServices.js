import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`);
    return response;
}