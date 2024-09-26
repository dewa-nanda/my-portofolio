// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
})
