<template>
  <div id="aside">
    <el-menu router :default-active="clickIndex" class="menus el-menu-vertical-demo">
      <el-sub-menu v-for="(menu, index) in menus" :key="index" :index="menu.path">
        <template #title>
          <span> {{ menu.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.path" v-for="(item, index) in menu.children" @click="itemClick($event)" :key="index">{{
            item.name
          }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(); //用router.options.routes  渲染菜单

const menus = router.currentRoute.value.matched[0].children;
console.log('menus', menus);
const clickIndex = ref('');
const itemClick = (e: { index: string }) => {
  clickIndex.value = e.index;
};
console.log('router', router);

const isCollapse = ref(true);

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="less">
#aside {
  width: 240px;
}
.menus {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: unset;
}
</style>
