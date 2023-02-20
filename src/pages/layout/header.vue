<template>
  <div id="header">
    <a href="https://github.com/yinjiajun223/daily-study" target="_blank" class="github"
      ><img
        decoding="async"
        loading="lazy"
        width="80"
        height="80"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
    /></a>
    <div class="header row row-h_sb row-v_c">
      <div class="header-title">影的小陋室</div>
      <div class="header-right">
        <ul class="row row-h_sa header-right_list">
          <li><a href="">首页</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">友链</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.el-header {
  padding: unset;
  --el-header-height: unset;
}
#header {
  .github {
    position: absolute;
  }
  .header {
    height: 80px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 hsl(0deg 0% 72% / 30%);
    &-title {
      margin-left: 20px;
      flex: 0 1 300px;
      font-size: 22px;
      font-weight: bolder;
      padding-right: 20px;
    }
    &-right {
      margin: 0;
      flex: 0 1 300px;
      font-weight: bolder;
      width: 400px;
      &_list {
        li {
          margin: 0 10px;
          a:hover {
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>
