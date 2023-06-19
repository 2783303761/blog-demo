<template>
  <div class="top-banner">
    <div class="carousel w-full">
      <div 
        :id="`item${index}`" 
        class="carousel-item w-full" 
        :style="{backgroundImage: `url(${item.img})`}"
        v-for="(item,index) in bannerList"
      >
        <div class="carousel-text text-center">{{ item.text }}</div>
      </div> 
    </div> 
    <!-- <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a> 
      <a href="#item2" class="btn btn-xs">2</a> 
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bannerList = ref([
    {
      img: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2021/09/2021091901225428-scaled.jpg',
      text: 'Windows 10X延期发布，微软这次做系统能学乖吗？'
    },
    {
      img: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2021/09/2021091901224385-scaled.jpg',
      text: 'LP直言：规模10亿以下的GP就不要来找我们了'
    }
])

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