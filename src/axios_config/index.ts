import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiURL } from "config/api";

const axios = Axios.create({
  // baseURL: apiURL,
  baseURL: 'http://192.168.2.122:3003/api/',
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  validateStatus: (status) => status >= 400,
});

interface AxiosCustomRequestConfig<D = any> extends AxiosRequestConfig<D> {
  _retry: boolean;
}
interface AxiosCustomError<T = any, D = any> extends AxiosError<T, D> {
  config: AxiosCustomRequestConfig<D>;
}
const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const acToken = JSON.parse(localStorage.getItem("token") ?? '');
  config.validateStatus = (_) => true;
  config.headers = {
    Authorization: `Bearer ${acToken.accessToken}`,
  };
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosCustomError) => {
  if (error.response) {
    if (error.response.status === 403 && error.response.data) {
      return Promise.resolve(error.response.data);
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);

axios.interceptors.response.use(onResponse, onResponseError);
export default axios;
