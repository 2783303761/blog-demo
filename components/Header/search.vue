<template>
  <div class="search-content">
    <div class="search-box">
      <div class="title-content flex flex-row text-base font-medium">
        <div class="text">搜索</div>
        <div class="num">(0)</div>
      </div>
      <input type="text" placeholder="请输入搜索关键词" class="input w-full search-input mt-4" />
    </div>
    <div class="search-recommend mt-12">
      <div class="title-content flex flex-row text-base font-medium">
        <div class="text">最新推荐</div>
      </div>
      <div class="recommend-list mt-4">
        <a 
          :href="item.url" 
          target="_blank"
          v-for="item in recommendList"
        >{{ item.name }}</a>
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
          v-for="item in tagList"
        ># {{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>

const recommendList = ref([
  {
    name: 'Windows 10X延期发布，微软这次做系统能学乖吗？',
    url: '/'
  },
  {
    name: '高端的LiFi可见光通信技术，古人早就用上了？',
    url: '/'
  },
  {
    name: '今天的我们怎么成了一种纯粹的“观看动物”？',
    url: '/'
  },
  {
    name: 'LP直言：规模10亿以下的GP就不要来找我们了',
    url: '/'
  },
  {
    name: '618超越雀巢、星巴克，这个国产咖啡品牌做对了什么？',
    url: '/'
  },
])

const tagList = ref([
  {
    name: 'Facebook',
    url: '/'
  },
  {
    name: 'Netscape',
    url: '/'
  },
  {
    name: '兰博基尼',
    url: '/'
  },
  {
    name: '大跨越',
    url: '/'
  },
  {
    name: '工业制造的皇冠',
    url: '/'
  },
  {
    name: '气氛',
    url: '/'
  },
  {
    name: '新手云集',
    url: '/'
  },
  {
    name: '本土汽车品牌',
    url: '/'
  },
  {
    name: '激光雷达',
    url: '/'
  },
  {
    name: '烧钱',
    url: '/'
  },
  {
    name: '特斯拉',
    url: '/'
  },
])

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