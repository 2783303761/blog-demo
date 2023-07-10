<template>
  <div class="mt-4 flex justify-center flex-col">
    <div v-for="item in baseInfo.contents">
      <CommonCard :item="item"></CommonCard>
      <!-- <TextCard :item="item"></TextCard> -->
    </div>
    <div class="join mx-auto">
      <button 
        :class="['join-item','btn',index + 1 == pageNum ? 'btn-active' : '']"
        v-for="(item,index) in pageCount"
        @click="jumpUrl(index)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import CommonCard from '~/components/ArticleCard/CommonCard.vue';
// import TextCard from '~/components/ArticleCard/TextCard.vue';

const props = defineProps({
  baseInfo: {
    type: Object,
    default: {}
  },
  pagesize: Number,
  pageNum: String
})

// 页数
const pageCount = computed(() => {
  return Math.ceil(props.baseInfo.totalCount/props.pagesize)
})

const jumpUrl = index => {
  window.location.href = `${window.location.origin}${window.location.pathname}?pageNum=${index+1}${useRoute().query.searchWord ? '&searchWord=' : ''}${useRoute().query.searchWord}`
}

</script>
