<template>
  <div class="search-content">
    <div class="search-box">
      <div class="title-content flex flex-row text-base font-medium">
        <div class="text">搜索</div>
        <!-- <div class="num">(0)</div> -->
      </div>
      <input 
        type="text" 
        placeholder="请输入搜索关键词" 
        class="input w-full search-input mt-4"
        v-model="searchWord"
        @keyup.enter.native="goSearch(carouselWords)"
      />
    </div>
    <div class="search-recommend mt-12">
      <div class="title-content flex flex-row text-base font-medium">
        <div class="text">最新推荐</div>
      </div>
      <div class="recommend-list mt-4">
        <a 
          :href="item.url" 
          target="_blank"
          v-for="item in data.contentInfo.contents"
        >{{ item.title }}</a>
      </div>
    </div>
    <div class="search-tag mt-12">
      <div class="title-content flex flex-row text-base font-medium">
        <div class="text">推荐标签</div>
      </div>
      <div class="tag-list mt-4">
        <a 
          :href="item.url" 
          target="_blank"
          v-for="item in data.tagInfo.list"
        ># {{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getContentList, getMetaList } from '~/service';
import { ref } from 'vue'
 
const { data } = useAsyncData(async () => {
  const contentInfo = await getContentList({
    offset: 0,
    limit: 5,
    type: 'post'
  });
  const tagInfo = await getMetaList({
    offset: 0,
    limit: 10,
    type: 'tag'
  })
  return {
    contentInfo,
    tagInfo
  };
});

const searchWord = ref('')

const goSearch = () => {
  window.location.href = `/search?searchWord=${searchWord.value}`
}

</script>

<style lang="less" scoped>
.search-content {
  padding: 40px 20px;
  .title-content {
    .text {
      position: relative;
      width: max-content;
      &:before {
        content: '';
        height: 35%;
        left: 1px;
        right: 1px;
        background-color: #fd6e6e;
        position: absolute;
        opacity: .4;
        bottom: 4px;
      }
    }
  }
  .search-input {
    --tw-border-opacity: 1;
    border-color: #f2f2f2;
    --tw-bg-opacity: 1;
    background-color: #f2f2f2;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    &:focus {
      outline-style: none;
      outline-width: none;
      outline-offset: none;
    }
  }
  .search-recommend {
    .recommend-list {
      a {
        color: #737578;
        position: relative;
        padding-left: 16px;
        line-height: 24px;
        & + a {
          margin-top: 16px;
        }
        &::before {
          content: ' ';
          display: block;
          position: absolute;
          height: 6px;
          width: 6px;
          border: 1px solid #737578;
          border-radius: 3px;
          top: 8px;
          left: 0;
        }
        &:hover {
          color: #57595c;
        }
      }
    }
  }
  .search-tag {
    .tag-list {
      a {
        color: #737578;
        padding: 8px 15px;
        border-radius: 2px;
        letter-spacing: 1px;
        line-height: 1;
        display: inline-block;
        margin: 0 8px 8px 0;
        border: 1px solid #f6f6f6;
        &:hover {
          color: #57595c;
        }
      }
    }
  }
}

</style>