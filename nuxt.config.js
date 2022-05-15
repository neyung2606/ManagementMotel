import { resolve } from "path"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'poseidon-motel',
    htmlAttrs: {
      lang: 'vn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~assets/styles/_variables.scss'
  ],
  styleResources: {
    scss: [
      '~assets/styles/*.scss',
    ],
  },

  // Config tailwind
  tailwindcss: {
    cssPath: '~assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources'
  ],

  i18n: {
    locales: ['en', 'fr', 'es', 'vn'],
    defaultLocale: 'vn',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    sourcemap: true,
  },

  // Config alias
  alias: {
    '@components': resolve(__dirname, 'components'),
    '@pages': resolve(__dirname, 'pages'),
    '@assets': resolve(__dirname, 'assets'),
    '@store': resolve(__dirname, 'store'),
    '@api': resolve(__dirname, 'api'),
  }
}
