import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Test',
        meta: {
            title: '登录',
            keepAlive: true
        },
        component: () => import('@/pages/test.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/ele',
        name: 'ele',
        meta: {
            title: '饿了么',
            keepAlive: true
        },
        component: () => import('@/pages/testEle.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(), // createWebHashHistory （哈希模式） createWebHistory（History模式）
    routes
});
export default router;