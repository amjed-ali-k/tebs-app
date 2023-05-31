import axios from "axios";
import { useAuth } from "./auth";

const axiosApiInstance = axios.create();

const tokenRefreshUrl =
  "http://punepreproduction.westindia.cloudapp.azure.com:92/api/v1/Account/refresh-token";

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const auth = useAuth();
    config.headers.Authorization = `Bearer ${auth?.user?.accessToken}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const auth = useAuth();
  if (!auth?.user) return;
  const response = await axios.post(tokenRefreshUrl, {
    token: auth?.user?.refreshToken,
  });
  const { accessToken, refreshToken } = response.data;

  auth?.signIn({ ...auth?.user, accessToken, refreshToken });
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
