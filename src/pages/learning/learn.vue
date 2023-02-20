<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <Aside />
        <el-container class="container">
          <el-main>
            <Main />
          </el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/pages/layout/header.vue';
import Aside from '@/pages/layout/aside.vue';
import Footer from '@/pages/layout/footer.vue';
import Main from '@/pages/layout/main.vue';

import { useRouter, useRoute } from 'vue-router';
</script>

<style lang="less">
.container {
  height: calc(100vh - 80px);
}
</style>
