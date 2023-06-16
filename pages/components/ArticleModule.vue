<template>
  <div class="mt-4 flex justify-center flex-col">
    <div v-for="item in list.concat(list)">
      <CommonCard v-if="item.type === 1" :item="item"></CommonCard>
      <TextCard v-if="item.type === 2" :item="item"></TextCard>
    </div>
    <div class="join mx-auto">
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CommonCard from '~/components/ArticleCard/CommonCard.vue';
import TextCard from '~/components/ArticleCard/TextCard.vue';

const list = ref([
  {
    coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082618051678-150x150.jpg',
    title: 'Windows 10X延期发布，微软这次做系统能学乖吗？',
    desc: '根据Windows Central的报道，Windows 10X操纵系统以及第三方OEM设备在今年已经无望问世。根据原计划，去年发布的的Windows 10X本来应该在今年年底与消费者见面。但自从今年5月份第一次宣布延期之后，前几天微软宣布再次延期。有消息表示，用于企业和教育领域的单屏Windows 10X要等到...',
    columnName: '车与出行',
    createTime: '2020-08-26',
    type: 1
  },
  {
    coverImg: '',
    title: ' 高端的LiFi可见光通信技术，古人早就用上了？ ',
    desc: '如果穿越回古代，你最受不了的是什么？想必大部分人都会说：“没有WiFi！”对于现代人来说，不能快速传递信息的生活简直无法想象不过，很多影视剧也告诉我们：在没有WiFi的时候，还是有很多快速传递信息方式的，比如灯。古装片《长安十二时辰》中，长安城的望楼使用了12个方格传递信息，每个方格可以用灯点亮或者熄...',
    columnName: '车与出行',
    createTime: '2020-08-26',
    type: 1
  },
  {
    coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082618051678-150x150.jpg',
    title: 'Windows 10X延期发布，微软这次做系统能学乖吗？',
    desc: '根据Windows Central的报道，Windows 10X操纵系统以及第三方OEM设备在今年已经无望问世。根据原计划，去年发布的的Windows 10X本来应该在今年年底与消费者见面。但自从今年5月份第一次宣布延期之后，前几天微软宣布再次延期。有消息表示，用于企业和教育领域的单屏Windows 10X要等到...',
    columnName: '车与出行',
    createTime: '2020-08-26',
    type: 1
  },
  {
    coverImg: 'https://theme.nicetheme.xyz/livingcoral/wp-content/uploads/sites/4/2020/08/2020082618051678-150x150.jpg',
    title: 'Windows 10X延期发布，微软这次做系统能学乖吗？',
    desc: '上海书展进行时，人们争相买书屯书的同时，也在反思讨论相比纸质阅读，网络阅读带给我们哪些影响。如今，算法试图精准地把你感兴趣的信息推到你面前，标题套路即便老套但仍旧屡试不爽，我们看到的文章越来越流水线化。当阅读被算法收编，我们是如何成为一种纯...',
    columnName: '今天的我们怎么成了一种纯粹的“观看动物”？',
    createTime: '2020-08-26',
    type: 2
  },
])

</script>
