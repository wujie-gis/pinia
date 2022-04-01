/*
 * @Author: wuj
 * @Date: 2022-03-18 14:47:21
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-18 15:09:13
 * @Description:
 */
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { RequestConfig, RequestInterceptors } from "./axios";

/**
 * 
 * 拦截器分为三种：
类拦截器
实例拦截器
接口拦截器
 */

class Request {
  // axios 实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("全局请求拦截器");
        return res;
      },
      (err: any) => err
    );

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        console.log("全局响应拦截器");
        return res.data;
      },
      (err: any) => err
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
