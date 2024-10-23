
import MockAdapter from 'axios-mock-adapter';
import axios, { AxiosHeaders, AxiosInstance } from 'axios';

const createAxiosInstance = (
  baseURL: string,
  token?: string,
  headers?: Record<string, string>, // 更具体的类型
  responseType?: 'json' | 'text' | 'blob', // 更具体的类型
  timeout?: number, // 超时时间
  params?: Record<string, string>
) => {
  const instance = axios.create({
    baseURL: baseURL, // 替换为你的API基础URL
    responseType: responseType || 'json', // 默认响应类型为 json
    timeout: timeout || 60000, // 设置超时时间，默认10秒
    params: params
  });

  // 请求拦截器，附加token
  instance.interceptors.request.use(
    (config) => {
      if (headers) {
        config.headers = AxiosHeaders.from({
          ...(config.headers || {}), // 确保config.headers存在
          ...headers,
        });
      }
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`); // 仅在token存在时添加Authorization
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 响应拦截器，可以处理响应错误或进行其他操作
  instance.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        throw new Error('令牌已经过期或没有权限查看');
      }
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const mockApiResponse = (
  http: AxiosInstance,
  method: 'get' | 'post' | 'put' | 'delete' | string,
  url: string,
  mockData: any
) => {
  const mock = new MockAdapter(http, { delayResponse: 800 });
  switch (method) {
    case 'get':
      return mock.onGet(url).reply(200, mockData);
    case 'post':
      return mock.onPost(url).reply(200, mockData);
    case 'put':
      return mock.onPut(url).reply(200, mockData);
    case 'delete':
      return mock.onDelete(url).reply(200, mockData);
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
export { createAxiosInstance, mockApiResponse }