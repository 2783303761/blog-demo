<template>
  <div class="article-detail">
    <div class="crumb">
      <a href="/" class="crumb-item">首页<em>/</em></a>
      <div class="crumb-item crumb-cur">{{ data.title }}</div>
    </div>
    <div class="title">{{ data.title }}</div>
    <div class="article-info flex flex-row items-center">
      <template v-if="data.metas && data.metas.length">
          <div class="create-time">{{ data.metas[0].title }}</div>
          <i class="text-primary mx-2">·</i>
        </template>
      <div class="create-time">{{ data.createdAt }}</div>
    </div>
    <div class="content" v-html="data.content"></div>
  </div>
</template>

<script setup>
import { getContentDetail } from '~/service';
const route = useRoute();
const { data } = useAsyncData(async () => {
  const detailInfo = await getContentDetail({
    type: 'post',
    charID: route.params.id
  });
  return detailInfo;
});
</script>

<style lang="less" scoped>
.article-detail {
  .crumb {
    display: flex;
    .crumb-item {
      color: #8c98a3;
      font-size: 13px;
      em {
        font-style: unset;
        margin: 0 8px;
      }
    }
    .crumb-cur {
      color: #1f1e1e;
    }
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 20px;
  }
  .article-info {
    margin-top: 20px;
    .create-time {
      color: #8c98a3;
      font-size: 13px;
    }
    i {
      line-height: 1px;
    }
  }
  .content {
    margin-top: 20px;
  }
}
</style>