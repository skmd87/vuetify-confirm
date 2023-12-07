export default defineNuxtConfig({
  modules: ['../src/module','vuetify-nuxt-module','@nuxtjs/i18n'],
  vuetifyConfirm: {},
  devtools: { enabled: true },
  i18n: {
    locales: ['en', 'ar']
    
  }
})
