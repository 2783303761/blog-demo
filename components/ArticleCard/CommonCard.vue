<template>
  <div class="common-card flex">
    <div class="left-content" v-if="item.coverImg">
      <img :src="item.coverImg" />
    </div>
    <div class="right-content flex-1 flex flex-col justify-between">
      <div class="grid">
        <div class="text-lg font-bold line">{{ item.title }}</div>
        <div class="article-desc text-sm mt-4 line-2">{{ item.desc }}</div>
      </div>
      <div class="card-footer flex text-xs mt-3">
        <a>{{ item.columnName }}</a>
        <i class="text-primary mx-2">·</i>
        <span>{{ item.createTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object
})
</script>

<style lang="less" scoped>
.common-card {
  padding: 16px;
  box-shadow: 0px 5px 50px 0 rgb(8 11 25/1%);
  background: white;
  margin-bottom: 20px;
  border-radius: 8px;
  .left-content {
    margin-right: 16px;
    height: 147px;
    width: 147px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    img {
      height: 100%;
      width: 100%;
      transition: all .444s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .right-content {
    padding: 2px 16px 2px 0;
    .article-desc {
      color: #636874;
    }
    .card-footer {
      color: #636874;
    }
    i {
      color: #fd6e6e;
    }
  }
}
</style>