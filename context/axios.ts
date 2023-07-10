import axios from "axios";
import { useAuth } from "./auth";
import * as SecureStore from "expo-secure-store";

const axiosApiInstance = axios.create();

const tokenRefreshUrl =
  "http://punepreproduction.westindia.cloudapp.azure.com:92/api/v1/Account/refresh-token";

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const userd = await SecureStore.getItemAsync("user");
    if (!userd) return config;
    const access_token = JSON.parse(userd)?.accessToken;
    if (!access_token) return config;
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const userd = await SecureStore.getItemAsync("user");
  if (!userd) return;

  const user = JSON.parse(userd);
  const refresh_token = user?.refreshToken;
  if (!refresh_token) return;

  const response = await axios.post(tokenRefreshUrl, {
    token: refresh_token,
  });

  const { accessToken, refreshToken } = response.data;
  await SecureStore.setItemAsync(
    "user",
    JSON.stringify({ ...user, accessToken, refreshToken })
  );
  return accessToken;
};

// Response interceptor for API calls,
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
