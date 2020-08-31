import { GET, POST } from "./config";
import axios from "axios";
// 创建axios请求实例
const instance = axios.create({
  baseURL: "http://123.207.32.32:8000/api/x6", // 发送请求值会在url前拼接baseURL
});
// ===========================================
// 添加请求拦截器
// instance.interceptors.request.use(
//   function(config) {
//     // 在发送请求之前做些什么
//     Toast.loading({
//       message: "加载中...",
//       forbidClick: true,
//     });
//     return config;
//   },
//   function(error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );
// // ============================================
// // 添加响应拦截器
// instance.interceptors.response.use(
//   function(response) {
//     // 对响应数据做点什么
//     return response;
//   },
//   function(error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   }
// );
// ========================================
// 抛出一个函数对象
export function request(method, url, params) {
  switch (method) {
    case GET:
      return get(url, params);
    case POST:
      return post(url, params);
  }
}
// 封装get方法
function get(url, params) {
  return instance.get(url, params);
}
// 封装post方法
function post(url, params) {
  return instance.post(url, params);
}
