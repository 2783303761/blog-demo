<template>
  <div 
    class="top-banner text-2xl font-bold" 
    style="background-image:url('https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020090307074950.jpeg')"
  >
    前沿科技
  </div>
  <ArticleModule></ArticleModule>
</template>
<script setup>
// import TopBanner from './components/TopBanner.vue';
import ArticleModule from '../../components/ArticleModule.vue';

</script>

<style lang="less" scoped>
.top-banner {
  height: 135px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  line-height: 135px;
  border-radius: 8px;
}
</style>
<style lang="less">
a {
  display: block;
}
</style>
