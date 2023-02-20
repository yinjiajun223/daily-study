<template>
  <div id="footer">
    <div class="footer row row-v_c">
      <div class="footer-title"><el-link type="primary" href="https://yinjiajun223.github.io/" target="_blank">个人博客</el-link></div>

      <div class="footer-title">
        <el-link type="primary" href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2023001252号-1</el-link>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.el-footer {
  padding: unset;
  --el-footer-height: unset;
}
#footer {
  .footer {
    height: 80px;
    padding: 0 20px;

    &-title {
      padding-right: 20px;
    }
  }
}
</style>
