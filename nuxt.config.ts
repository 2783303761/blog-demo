import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
      },
    },
  },
})
