import axios from 'axios';
import cookie from "js-cookie"

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'http://spinel-hub-env-2.eba-ad9m9bcp.us-east-1.elasticbeanstalk.com/', // Replace with your base URL
  headers: {Authorization:cookie.get("token")}
});

export const baseURL = "http://spinel-hub-env-2.eba-ad9m9bcp.us-east-1.elasticbeanstalk.com/"



export default instance