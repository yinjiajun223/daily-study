import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from '@/router';
import ElementPlus from 'element-plus';
import '@/assets/styles/reset.less';
import '../node_modules/@carelj/metacss/dist/index.min.css';

const app = createApp(App); // 创建vue实例
app.use(router); // 挂载实例
app.use(pinia); // 挂载pinia

app.use(ElementPlus);

app.mount('#app');
