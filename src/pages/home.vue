<template>
  <div id="wrapper">
    <header class="header">
      <div>
        <div class="logo">
          <img src="@/assets/ying.jpg" class="logo" />
        </div>
        <div class="content">
          <div class="inner" style="transition: all 2s ease">
            <div class="inner-content">
              <h1 class="name">影</h1>
              <p>杀人须就咽喉上着刀，吾人为学，当从心髓入微处用力，自然笃实光辉。</p>
              <p>这是我的个人个人主页</p>
            </div>
          </div>
        </div>
      </div>
      <div class="others">
        <ul>
          <li>
            <a @click="jump('learn')">学习笔记</a>
          </li>
          <li>
            <a>还没想好</a>
          </li>
          <li>
            <a>还没想好</a>
          </li>
          <li>
            <a>还没想好</a>
          </li>
        </ul>
      </div>
    </header>

    <footer class="footer">
      <p class="copyright mg-b_16">© 2021-2023</p>
      <a href="https://beian.miit.gov.cn/" target="_blank" class="beian">鄂ICP备2023001252号-1</a>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import router from '../router';
import $ from 'jquery';

onMounted(() => {
  const innerHeight = $('.inner').outerHeight() as number;
  const contentHeight = $('.content').outerHeight() as number;
  console.log('contentHeight', contentHeight, 'innerHeight', innerHeight);
  const needH = innerHeight + (contentHeight - innerHeight) / 2;
  console.log('needH', needH);
  $('.inner-content').height(0).hide();
  $('.inner').height(0).hide();
  $('.inner').show().height(needH);
  $('.inner-content').height(0).fadeIn(2500);
});

const jump = (index: string) => {
  router.push(index);
};
</script>

<style lang="less" scoped>
/* background */
#wrapper {
  background-image: url('@/assets/home_bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 100vh;
}
/* my homepage */
#wrapper {
  font-size: 14px;
  color: #fff;
  padding: 144px 32px;
}
.header {
  width: 488px;
  height: 488px;
  margin: 0 auto;
}
.header .logo {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 50%;
}
.header .content {
  border: 1px solid #fff;
  border-left: none;
  border-right: none;
  max-width: 100%;
  margin: 56px 0;
  position: relative;
}
.header .content::before {
  content: ' ';
  display: block;
  position: absolute;
  top: -57px;
  left: 243px;
  width: 1px;
  height: calc(3.5rem + 1px);
  background: #ffffff;
}
.header .content .inner .name {
  font-size: 30px;
  text-align: center;
  line-height: 3;
}
.header .content .inner p {
  font-size: 15px;
  text-align: center;
}
.header .content .inner p:nth-child(3) {
  margin: 40px 0;
}
.header .others {
  display: flex;
  justify-content: center;
  position: absolute;
  ul {
    display: flex;
    border: solid 1px #ffffff;
    border-radius: 4px;
    position: relative;
    right: 2px;
    // position: relative;
  }
}
.header .others::before {
  content: '';
  display: block;
  position: relative;
  // top: -57px;
  left: 243px;
  top: -57px;
  // left: 243px;
  width: 1px;
  height: calc(3.5rem + 1px);
  background: #ffffff;
}
.header .others ul a {
  font-size: 17px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: 122px;
  padding: 17px 0;
  box-sizing: border-box;
  border-right: 1px solid #fff;
}
.header .others ul a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.header .others ul li:nth-child(4) a {
  border-right: none;
}
/* footer */
#wrapper .footer {
  text-align: center;
  width: 100%;
  // position: fixed;
  right: 2px;
  bottom: 100px;
}

@media (max-width: 576px) {
  #wrapper {
    font-size: 14px;
    color: #fff;
    padding: 64px 32px;
  }
  .header {
    width: 320px;
    // height: 380px;
  }
  .header .content::before {
    top: -57px;
    left: 161px;
  }
  .header .others::before {
    left: 161px;
  }
  .header .others ul {
    right: 0;
  }
  .header .others ul a {
    width: 80px;
  }
}
.beian {
  color: #fff;
}
</style>
