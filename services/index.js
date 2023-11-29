import axios from 'axios';
import cookie from "js-cookie"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: `${apiUrl}`, // Replace with your base URL
  headers: {Authorization:cookie.get("token")}
});

export const baseURL = "Spinel-hub-env-2.eba-ad9m9bcp.us-east-1.elasticbeanstalk.com"



export default instance