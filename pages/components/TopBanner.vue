<template>
  <div class="top-banner">
    <div class="carousel w-full">
      <div 
        :id="`item${index}`" 
        class="carousel-item w-full" 
        :style="{backgroundImage: `url(${item.content})`}"
        v-for="(item,index) in bannerList"
      >
        <div class="carousel-text text-center">{{ item.title }}</div>
      </div> 
    </div> 
    <!-- <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a> 
      <a href="#item2" class="btn btn-xs">2</a> 
    </div> -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bannerList:{
    type: Array,
    default: []
  }
})

</script>

<style lang="less" scoped>
.carousel-item {
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 8px;
  position: relative;
  .carousel-text {
    position: absolute;
    color: white;
    width: 100%;
    padding: 0 16px;
    font-size: 20px;
    font-weight: 600;
    bottom: 24px;
  }
}
</style>