<template>
  <TopBanner :bannerList="data.bannerInfo.contents"></TopBanner>
  <ArticleModule :baseInfo="data.contentInfo" :pageNum="route.query.pageNum || 1" :pagesize="8"></ArticleModule>
</template>
<script setup>
import TopBanner from './components/TopBanner.vue';
import ArticleModule from './components/ArticleModule.vue';
import { getContentList } from '~/service';

const route = useRoute();

const { data } = useAsyncData(async () => {
  const contentInfo = await getContentList({
    offset: (route.query.pageNum - 1 || 0) * 8,
    limit: '8',
    type: 'post'
  });
  const bannerInfo = await getContentList({
    type: 'carousel'
  })
  return {
    contentInfo,
    bannerInfo
  };
});

</script>


<style lang="less">
a {
  display: block;
}
</style>
