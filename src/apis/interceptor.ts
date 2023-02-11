import axios, { AxiosInstance } from 'axios';
import {serverConfig} from './config'; // 环境变量中获取的请求地址配置
import {commonStore} from '../store/common.store';
// import { requireLocalImg } from '@/utils/func';

declare module 'axios' {
    // 声明额外字段
    interface AxiosRequestConfig {
        showLoading?: boolean;
        loadingText?: string;
        needCheck?: boolean;
    }
}

axios.defaults.timeout = 15000; // 设置超时时间
axios.defaults.showLoading = true; // 设置请求是否loading
axios.defaults.needCheck = false; // 默认请求不携带auth_token
let toast: any;

const { apiSeviceUrl } = serverConfig;
// const loadingGif = requireLocalImg('../assets/loading.gif');
// import loadingGif from '../assets/loading.gif'; // vite使用import引入图片 不能使用require
function createInterceptor(instance: AxiosInstance): void {
    instance.interceptors.request.use(
        function (config) {
            const useCommonStore = commonStore();
            const token = useCommonStore.info.auth_token;
            // 请求头token
            if (config.needCheck && token) {
                config.headers = Object.assign({}, config.headers);
                config.headers.auth_token = token;
            }
            // axios cancelToken
            // config.cancelToken = new axios.CancelToken((cancel) => {
            //     useCommonStore.pushToken(cancel);
            // });
            // Do something before request is sent
            if (config.showLoading && !toast) {
                // toast = showLoadingToast({
                //     duration: 0, // 持续展示 toast
                //     forbidClick: true, // 禁用背景点击
                //     icon: loadingGif,
                //     message: config.loadingText || '加载中...'
                // });
            }
            return config;
        },
        function (error) {
            // Do something with request error
            if (toast && error.showLoading) {
                toast.close();
                toast = null;
            }
            // showFailToast('网络错误');
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // Do something with response data
            if (toast || (response.config && response.config.showLoading)) {
                toast && toast.close();
                toast = null;
            }
            return response;
        },
        function (error) {
            // Do something with response error
            if (toast || (error.config && error.config.showLoading)) {
                toast && toast.close();
                toast = null;
            }
            return Promise.reject(error);
        }
    );
}

// 初始化实例
const axiosInstance = axios.create();
const apiInstance = axios.create({
    baseURL: apiSeviceUrl
});

createInterceptor(axiosInstance);
createInterceptor(apiInstance);

export const $axios = axiosInstance;
export const $api = apiInstance;