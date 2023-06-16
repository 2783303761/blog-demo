<template>
  <Header></Header>
  <div class="main-container">
    <slot></slot>
  </div>
  <Footer></Footer>
</template>
<script setup>
import Header from '../components/Header'
import Footer from '../components/Footer'

</script>
<style lang="less" scoped>
.main-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 50px 50px 50px;
}
</style>
<style lang="less">
@import url("~/asset/css/common.less");
</style>