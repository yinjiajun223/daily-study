import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import router from '@/router';
import ElementPlus from 'element-plus'
import '@/assets/styles/reset.less';

const app = createApp(App); // 创建vue实例
app.use(router); // 挂载实例
app.use(pinia); // 挂载pinia

app.use(ElementPlus)

app.mount('#app');
