import { vuetifyOptions } from './vuetify.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-21',
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module'
  ],

  eslint: {
    config: {
      import: {
        package: 'eslint-plugin-import-lite',
      },
    },
  },

  css: [
    'assets/styles/layers.scss',
    'vuetify/styles',
    'assets/styles/tailwind.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/styles/settings.scss',
      },
    },
    vuetifyOptions,
  },
})