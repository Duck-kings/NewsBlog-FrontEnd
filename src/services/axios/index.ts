import axios from 'axios';
import type { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

const instance = axios.create({
  baseURL: 'newsblog-backend-production.up.railway.app/'
});

type axiosInstance = typeof instance;

class Service {
  constructor(private readonly axiosInstance: axiosInstance) {}

  async getData(url: string, config: AxiosRequestConfig = {}): Promise<any> {
    try {
      const { data } = await this.axiosInstance.get(url, config);
      return data;
    } catch (error) {
      return error;
    }
  }

  async postData<T>(
    url: string,
    userData: T,
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    try {
      const { data } = await this.axiosInstance.post(url, userData, config);
      return data;
    } catch (error) {
      return error;
    }
  }

  async putData<T>(
    url: string,
    userData: T,
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    try {
      const { data } = await this.axiosInstance.put(url, userData, config);
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteData<T>(
    url: string,
    userData: T,
    headers: RawAxiosRequestHeaders = {}
  ): Promise<any> {
    try {
      const { data } = await this.axiosInstance({
        method: 'delete',
        url,
        data: userData,
        headers
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}

export const axiosService = new Service(instance);
