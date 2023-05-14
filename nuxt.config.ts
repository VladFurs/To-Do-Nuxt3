// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false ,// Disable Server Side rendering
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  
})