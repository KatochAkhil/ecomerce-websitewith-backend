import axios from "axios";

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
} else {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
}

export default axios;
