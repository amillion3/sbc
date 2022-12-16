export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sanders Bros Coffee - Murfreesboro,  TN',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.scss',
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#39b982' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-buefy',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    prefetch: true,
    families: {
      Cabin: true,
      Montserrat: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
