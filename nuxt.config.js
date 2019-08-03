import pkg from './package'

export default {
  mode: 'spa',
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-components',
    '~/plugins/vue-js-modal',
    '~/plugins/vue-progressbar',
    '~/plugins/vue-the-mask'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    ['vue-wait/nuxt', { useVuex: true }]
  ],
  axios: {
    baseURL: 'https://api.airtable.com/v0/appnQCOLL3KAWz0F7'
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
