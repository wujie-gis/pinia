/*
 * @Author: wuj
 * @Date: 2022-03-18 14:53:56
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-18 15:12:09
 * @Description:
 */

// 实例拦截器是为了保证封装的灵活性，
// 因为每一个实例中的拦截后处理的操作可能是不一样的，
// 所以在定义实例时，允许我们传入拦截器。

import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

// 接口拦截
