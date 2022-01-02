import axios from "axios";
import store from "../store/index";
import settings from "boot/./settingsFile";
import {api} from "boot/axios";


export const authClient = axios.create({
  baseURL: settings.settings.API_URL,
});
authClient.defaults.headers.common['Accept']='application/json'


/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters["auth/authUser"] &&
      !store.getters["auth/guest"]
    ) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
);

export default {
  async login(payload) {
    authClient.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
    return authClient.post("api/login", payload);
  },
  logout() {
    return authClient.post("/logout");
  },
  async forgotPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/forgot-password", payload);
  },
  getAuthUser() {
    authClient.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
    return authClient.get("/api/user");
  },
  async resetPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/reset-password", payload);
  },
  updatePassword(payload) {
    return authClient.put("/user/password", payload);
  },
  async registerUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/register", payload);
  },
  sendVerification(payload) {
    return authClient.post("/email/verification-notification", payload);
  },
  updateUser(payload) {
    return authClient.put("/user/profile-information", payload);
  },

};
