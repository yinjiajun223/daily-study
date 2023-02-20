<template>
  <router-view v-slot="{ Component, route }" class="router-view">
    <transition name="fade" mode="out-in" appear>
      <keep-alive :include="['list']">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { commonStore } from './store/common.store';

const useCommonStore = commonStore();
// storeToRefs  保持响应式 直接解构不会动态改变 参考ref toRefs storeToRefs区别
// const { direction, keepAliveComponents } = storeToRefs(useCommonStore);

// 生命周期
onMounted(() => {
  // useCommonStore.updateFlag(true);
});
// 计算属性
const transitionClass = computed(() => {
  // return `slide-${direction.value}`;
});
</script>
