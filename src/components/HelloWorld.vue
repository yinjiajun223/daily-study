<template>
<div>123123</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { commonStore } from '@/store/common.store';
import { computed, onMounted } from 'vue';

const useCommonStore = commonStore();
// storeToRefs  保持响应式 直接解构不会动态改变 参考ref toRefs storeToRefs区别
const { direction, keepAliveComponents } = storeToRefs(useCommonStore);

// 生命周期
onMounted(() => {
  console.log('1',1)
});
// 计算属性
const transitionClass = computed(() => {
  return `slide-${direction.value}`;
});
</script>