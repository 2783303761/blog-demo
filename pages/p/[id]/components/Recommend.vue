<template>
  <div class="recommend">
    <div class="title">
      <i class="iconfont icon-aixin"></i>
      你可能感兴趣的
    </div>
    <div v-for="item in data.contents">
      <CommonCard :item="item"></CommonCard>
    </div>
  </div>
</template>

<script setup>
import { getContentList } from '~/service';
import CommonCard from '~/components/ArticleCard/CommonCard.vue';
const { data } = useAsyncData(async () => {
  const contentInfo = await getContentList({
    offset: 0,
    limit: '4',
    type: 'post'
  });
  return contentInfo
});
</script>

<style lang="less" scoped>
.recommend {
  margin-top: 40px;
  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    i {
      color: #fb6f6f;
      font-size: 20px;
      margin-right: 8px;
    }
  }
}
</style>