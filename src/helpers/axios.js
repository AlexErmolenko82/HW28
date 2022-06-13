import axios from "axios";

const instance = axios.create({
  baseURL: "https://lab.lectrum.io",
});

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance;
