import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/learn',
    name: 'learn',
    meta: {
      title: '学习笔记',
    },
    component: () => import('@/pages/learning/learn.vue'),
    children: [
      {
        path: '/htmlStudy',
        name: 'htmlStudy',
        meta: {
          title: 'htmlStudy',
        },
        component: () => import('@/pages/learning/html/html.vue'),
        children: [
          {
            path: '/html',
            name: 'html',
            meta: {
              title: 'html',
            },
            component: () => import('@/pages/learning/html/html.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/ele',
    name: 'ele',
    meta: {
      title: '饿了么',
      keepAlive: true,
    },
    component: () => import('@/pages/testEle.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory （哈希模式） createWebHistory（History模式）
  routes,
});
export default router;
