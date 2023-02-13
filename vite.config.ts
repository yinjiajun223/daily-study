import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import PostCssPxToViewport from 'postcss-px-to-viewport-8-plugin';
import AutoPreFixer from 'autoprefixer';

const postCssOptions = {
  unitToConvert: 'px', // 需要转换的单位，默认为 px
  viewportWidth: 2560, // 设计稿的视口宽度
  viewportHeight: 1539, //
  unitPrecision: 3, // 单位转换后保留的精度（很多时候无法整除）
  propList: ['*'], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
  viewportUnit: 'vw', // 指定需要转换成的视口单位，建议使用 vw
  fontViewportUnit: 'vw', // 字体使用的视口单位
  // 指定不转换为视口单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  selectorBlackList: ['.ignore', 'keep-px'], // 类名中含有'keep-px'以及'ignore'类都不会被转换
  minPixelValue: 1, // 设置最小的转换数值，这里小于或等于 1px 不转换为视口单位
  mediaQuery: false, // 媒体查询里的单位是否需要转换单位
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        AutoPreFixer(),
        PostCssPxToViewport(
          Object.assign(postCssOptions, { viewportWidth: 2560, viewportHeight: 1600, exclude: [/^(?!.*node_modules\/element-plus)/] }),
        ),
        // PostCssPxToViewport(Object.assign(postCssOptions, { viewportWidth: 750, exclude: [/node_modules\/element-plus/] })),
      ],
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      dts: resolve(__dirname, 'types/auto-imports.d.ts'),
      imports: ['vue', 'pinia', 'vue-router', { '@vueuse/core': [] }],
      eslintrc: { enabled: true },
    }),
  ],
  server: {
    port: 8080, //启动端口
    host: '0.0.0.0', //启动地址
    // hmr: {
    //   host: '0.0.0.0',
    //   port: 8080,
    // },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
