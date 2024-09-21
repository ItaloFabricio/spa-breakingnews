import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function signup(data) {
    delete data.confirmPassword;
    const body = {
        ...data, 
        username: generateUserName(data.name), 
        avatar:"https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
        background: "https://img.freepik.com/vetores-gratis/fundo-realista-de-luzes-de-neon_23-2148907367.jpg",
    }
    const response = axios.post(`${baseURL}/user/create`, body);
    return response;
}

export function signin(data) {
    const response = axios.post(`${baseURL}/auth/login`, data);
    return response;
}

export function userLogged() {
    const response = axios.get(`${baseURL}/user/findById`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      }
    });
    return response;
  }

  export function getUserById(id) {
    return axios.get(`${baseURL}/user/findById/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
  }

export function editUser(id, data) {
  const response = axios.patch(`${baseURL}/user/update/${id}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
  }

