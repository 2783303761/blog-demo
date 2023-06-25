<template>
  <div class="site-header">
    <div class="content flex flex-row">
      <a href="/" class="logo"></a>
      <div class="nav flex flex-row ml-8 flex-1">
        <div
          :class="['nav-item flex flex-row items-center',index == 0 ? 'active' : '']" 
          @click="jumpUrl(item)"
          v-for="(item,index) in navList"
        >
          {{ item.name }}
          <img class="ml-1" v-if="item.child.length" src="../../asset/images/down.svg" />
          <div class="sub-menu" v-if="item.child.length">
            <a 
              class="sub-menu-item text-sm" 
              v-for="subItem in item.child"
              :href="subItem.url"
              target="_blank"
            >{{ subItem.name }}</a>
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-row-reverse flex-1">
        <div class="right-icon flex items-center justify-center">
          <div class="drawer drawer-end rounded-full h-full">
            <input id="my-drawer-search" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content rounded-full flex">
              <!-- Page content here -->
              <label for="my-drawer-search" @click="showListIcon=false;" class="drawer-button m-auto">
                <i class="iconfont icon-search"></i>
              </label>
            </div> 
            <div class="drawer-side z-50">
              <label for="my-drawer-search" class="drawer-overlay"></label>
              <div class="menu p-4 w-96 h-full bg-white text-base-content search-m">
                <label for="my-drawer-search" class="flex flex-row-reverse">
                  <div class="close rounded-full flex items-center justify-center" @click="showListIcon=true;">
                    <i class="iconfont icon-close"></i>
                  </div>
                </label>
                <Search class="flex-1"></Search>
              </div>
            </div>
          </div>
        </div>
        <div class="m right-icon flex items-center justify-center">
          <div class="drawer rounded-full" v-if="showListIcon">
            <input id="my-drawer-nav" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content rounded-full flex">
              <!-- Page content here -->
              <label for="my-drawer-nav" class="drawer-button m-auto">
                <i class="iconfont icon-list"></i>
              </label>
            </div> 
            <div class="drawer-side bg-white z-50">
              <label for="my-drawer-nav" class="drawer-overlay"></label>
              <div class="menu p-4 w-96 h-full bg-white text-base-content">
                <label for="my-drawer-nav" class="flex flex-row-reverse mr-4">
                  <div class="close rounded-full flex items-center justify-center">
                    <i class="iconfont icon-close"></i>
                  </div>
                </label>
                <div class="collapse bg-white" v-for="item in navList" @click="jumpUrl(item)">
                  <input type="checkbox" /> 
                  <div class="collapse-title text-lg font-normal flex flex-row items-center">
                    {{ item.name }}
                    <img class="ml-1" v-if="item.child.length" src="asset/images/down.svg" />
                  </div>
                  <div class="collapse-content" v-if="item.child.length"> 
                    <a class="text-base indent-4 leading-8" :href="childItem.url" v-for="childItem in item.child">{{ childItem.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { debounce } from '../../utils'
import Search from './search.vue'

const navList = ref([
  {
    name: '首页',
    url: '/',
    child: []
  },
  {
    name: '玩物志趣',
    url: '/column/22',
    child: [
      {
        name: '前沿科技',
        url: '/column/22'
      },
      {
        name: '车与出行',
        url: '/'
      }
    ]
  },
  {
    name: '精选栏目',
    url: '/',
    child: []
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

const curPath = ref('')

onMounted(() => {
  listenScroll()
  curPath.value = window.location.pathname 
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

const jumpUrl = item => {
  if(!item.child.length) {
    window.location.href = item.url
  }
}

const showListIcon = ref(true)

</script>

<style lang="less" scoped>
.site-header {
  max-width: 1100px;
  padding: 30px;
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
        flex-shrink: 0;
        cursor: pointer;
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
    .right-icon {
      background: #f3f4f6;
      border-radius: 20px;
      height: 34px;
      width: 34px;
      margin: auto 4px auto 0;
      cursor: pointer;
      i {
        font-size: 16px;
      }
      .hover-img {
        display: none;
      }
      .close {
        height: 34px;
        width: 34px;
        background: #f3f4f6;
        cursor: pointer;
        &:hover {
          background: #636874;
          i {
            color: white;
          }
        }
      }
      .drawer-content:hover {
        background: #636874;
        i {
          color: black;
        }
      }
    }
    .m {
      display: none;
    }
    @media (max-width: 1000px) {
      .nav {
        display: none;
      }
      .m {
        display: flex;
      }
      .right-icon {
        img {
          height: 12px;
          width: 12px;
        }
        &:hover {
          background: #f3f4f6;
          i {
            color: black;
          }
        }
      }
    }
  }
  @media (max-width: 750px) {
    padding: 16px;
    .search-m {
      width: 100%;
      min-height: 100%;
      height: max-content;
    }
  }
}
.drawer-toggle:checked ~ .drawer-button {
  display: none;
}
</style>