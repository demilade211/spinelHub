import axios from 'axios';
import cookie from "js-cookie"

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'https://spinel-backend.onrender.com', // Replace with your base URL
  headers: {Authorization:cookie.get("token")}
});

export const baseURL = "https://spinel-backend.onrender.com"



export default instance