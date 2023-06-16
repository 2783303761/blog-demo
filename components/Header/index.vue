<template>
  <div class="site-header">
    <div class="content flex flex-row">
      <a href="/" class="logo"></a>
      <div class="nav flex flex-row ml-8 flex-1">
        <a 
          :class="['nav-item flex flex-row items-center',index === 0 ? 'active' : '']" 
          :href="item.url" 
          target="_blank" 
          v-for="(item,index) in navList"
        >
          {{ item.name }}
          <img class="ml-1" v-if="item.child.length" src="asset/images/down.svg" />
          <div class="sub-menu" v-if="item.child.length">
            <a 
              class="sub-menu-item text-sm" 
              v-for="subItem in item.child"
              :href="subItem.url"
              target="_blank"
            >{{ subItem.name }}</a>
          </div>
        </a>
      </div>
      <div class="search flex items-center justify-center">
        <img class="not-hover-img" src="asset/images/search.svg" />
        <img class="hover-img" src="asset/images/search-white.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { debounce } from '../../utils'

const navList = ref([
  {
    name: '首页',
    url: '/',
    child: []
  },
  {
    name: '玩物志趣',
    url: '/',
    child: []
  },
  {
    name: '精选栏目',
    url: '/',
    child: [
      {
        name: '前沿科技',
        url: '/'
      },
      {
        name: '车与出行',
        url: '/'
      }
    ]
  },
  {
    name: '示例页面',
    url: '/',
    child: []
  },
  {
    name: '购买主题',
    url: '/',
    child: []
  },
])

onMounted(() => {
  listenScroll()
})

const listenScroll = () => {
  window.addEventListener('scroll',debounce(() => {
    if(scrollY > 90) {
      document.querySelector('.site-header').style.position = 'sticky'
    } else {
      document.querySelector('.site-header').style.position = 'static'
    }
  },20))
}

</script>

<style lang="less" scoped>
.site-header {
  max-width: 1100px;
  padding: 30px 30px;
  margin: 0 auto;
  // position: sticky;
  top: 0;
  z-index: 9999;
  transition: .3s ease;
  .content {
    padding: 10px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0px 10px 50px 0 rgb(8 11 25/5%);
    .logo {
      background-image: url(https://gravatar.loli.net/avatar/30ce36acf38386632852814ad367c71a);
      height: 38px;
      width: 38px;
      background-size: 100%;
      border-radius: 50%;
    }
    .nav {
      .nav-item {
        padding: 8px 24px;
        border-radius: 100px;
        position: relative;
        img {
          height: 12px;
          width: 12px;
        }
        .sub-menu {
          position: absolute;
          top: 40px;
          left: 0;
          background-color: #fff;
          box-shadow: 0 2px 30px 0 rgb(34 40 49/8%);
          transition: all .5s ease 0s;
          border-radius: 16px;
          padding: 16px 16px;
          min-width: 180px;
          z-index: 100;
          display: none;
          .sub-menu-item {
            line-height: 1.5;
            opacity: 0.5;
            &:hover {
              opacity: 1;
            }
            & + .sub-menu-item {
              margin-top: 12px;
            }
          }
          &:hover {
            display: block;
          }
        }
        &:hover {
          background: linear-gradient(to top,#e9ecf1,#f3f4f6);
        }
        &:hover .sub-menu{
          display: block;
        }
        & + .nav-item {
          margin-left: 8px;
        }
      }
      .active {
        background: linear-gradient(to top,#e9ecf1,#f3f4f6);
      }
    }
    .search {
      background: #f3f4f6;
      border-radius: 20px;
      height: 34px;
      width: 34px;
      margin: auto 4px auto 0;
      cursor: pointer;
      img {
        height: 16px;
        width: 16px;
      }
      .hover-img {
        display: none;
      }
      &:hover {
        background: #636874;
        .hover-img {
          display: block;
        }
        .not-hover-img {
          display: none;
        }
      }
    }
  }
  
}
</style>