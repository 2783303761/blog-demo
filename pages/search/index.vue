<template>
  <div 
    class="top-banner text-2xl font-bold text-gray-500"
  >
    搜索：{{ route.query.searchWord || '全部' }}
  </div>
  <div v-if="data.contents && data.contents.length" v-for="item in data.contents">
    <CommonCard :item="item"></CommonCard>
  </div>
  <div v-else class="text-2xl font-bold text-center">未搜到内容哦</div>
</template>
<script setup>
import { getSearchList } from '~/service';
import CommonCard from '~/components/ArticleCard/CommonCard.vue';

const route = useRoute();

const { data } = useAsyncData(async () => {
  const contentInfo = await getSearchList({
    type: 'post',
    word: route.query.searchWord
  });
  return contentInfo
});

</script>

<style lang="less" scoped>
.top-banner {
  height: 135px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 135px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
<style lang="less">
a {
  display: block;
}
</style>
