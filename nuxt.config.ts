// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module",'@pinia/nuxt','nuxt3-leaflet'],
  css : ['bootstrap/dist/css/bootstrap.min.css'],
})
