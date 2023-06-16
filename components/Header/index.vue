<template>
  <div class="site-header">
    <a href="/" class="logo"></a>
    <div class="nav"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navList = ref([
  {
    name: '首页',
    url: '/',
    child: []
  },
  {
    name: '玩物志趣',
    url: '/',
    child: []
  },
  {
    name: '精选栏目',
    url: '/',
    child: [
      {
        name: '前沿科技',
        url: '/'
      },
      {
        name: '车与出行',
        url: '/'
      }
    ]
  },
  {
    name: '示例页面',
    url: '/',
    child: []
  },
  {
    name: '购买主题',
    url: '/',
    child: []
  },
])

</script>

<style lang="less" scoped>
.site-header {
  .logo {
    background-image: url(https://gravatar.loli.net/avatar/30ce36acf38386632852814ad367c71a);
    height: 38px;
    width: 38px;
    background-size: 100%;
    border-radius: 50%;
  }
}
</style>