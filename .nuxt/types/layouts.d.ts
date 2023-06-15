import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/zhaizhuo/Documents/项目/blog-demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}