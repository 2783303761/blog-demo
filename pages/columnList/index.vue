<template>
  <div class="column-content">
    <div class="column-title text-3xl font-bold">精选栏目</div>
    <div class="column-list flex flex-row flex-wrap mt-4 justify-between">
      <div class="column-item" v-for="item in columnList">
        <div class="column-header flex flex-row">
          <img class="column-icon" src="../../asset/images/column.svg" />
          <div class="column-info grid">
            <a :href="item.url" class="column-title line">{{ item.name }}</a>
            <div class="num">{{ item.articleNum }}篇文章</div>
          </div>
        </div>
        <div class="article-list">
          <a 
            :href="articleItem.url" 
            target="_blank" 
            class="article-item flex items-center mt-4" 
            v-for="articleItem in item.articleList"
          >
            <img :src="articleItem.coverImg" />
            <div class="article-title ml-4 line">{{ articleItem.title }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const columnList = ref([
  {
    name: '产业互联网',
    articleNum: 9,
    url: '/',
    articleList: [
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
    ]
  },
  {
    name: '产业互联网',
    articleNum: 9,
    url: '/',
    articleList: [
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
    ]
  },
  {
    name: '产业互联网',
    articleNum: 9,
    url: '/',
    articleList: [
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
    ]
  },
  {
    name: '产业互联网',
    articleNum: 9,
    url: '/',
    articleList: [
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
      {
        coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082616502272-150x150.jpg',
        title: '这个文明哪哦你软弱聂荣内容',
        url: '/'
      },
    ]
  }
])

</script>

<style lang="less" scoped>
.column-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  width: 454px;
  .column-header {
    .column-icon {
      height: 35px;
      width: 12px;
      margin-top: -6px;
      margin-right: 8px;
    }
    .column-info {
      .column-title {
        color: #4b4d50;
        font-size: 18px;
        font-weight: 600;
        :hover {
          color: black;
        }
      }
      .num {
        font-size: 12px;
        color: #8c98a3;
      }
    }
  }
  .article-list {
    .article-item {
      img {
        height: 48px;
        width: 48px;
        border-radius: 24px;
      }
      .article-title {
        font-size: 14px;
        color: #636874;
      }
    }
  }
  &:nth-of-type(n+3) {
    margin-top: 20px;
  }
  @media (max-width: 980px) {
    width: 100%;
    &:nth-of-type(n+2) {
      margin-top: 20px;
    }
  }
}
</style>
<style lang="less">
a {
  display: block;
}
div {
  box-sizing: border-box;
}
</style>
