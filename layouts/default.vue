<template>
  <!-- <Header></Header> -->
  <div class="main-container">
    <slot></slot>
  </div>
</template>
<script setup>
import Header from '../components/Header'

</script>
<style lang="less" scoped>
.main-container {
  max-width: 940px;
  margin: 0 auto;
}
</style>
<style lang="less">
@import url("~/asset/css/common.less");
</style>