export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Green Monitor',
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
  router: {
    linkExactActiveClass: 'active'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/vendor/nucleo/css/nucleo.css",
    "@/assets/vendor/font-awesome/css/font-awesome.css",
    "@/assets/scss/argon.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    // '@nuxtjs/dotenv', { filename: '.env.prod' }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  // },
  // sitemap: {
  //   hostname: 'https://localhost',
  //     gzip: true,
  //     exclude: [
  //     '/secret',
  //     '/admin/**'
  //   // ],
  //     // routes: [
  //     // '/page/1',
  //     // '/page/2',
  //     // {
  //     //   url: '/page/3',
  //     //   changefreq: 'daily',
  //     //   priority: 1,
  //     //   lastmod: '2017-06-30T13:30:00.000Z'
  //     // }
  //   ]
  // },
  // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
      editor: '~/.nuxt/content/editor.vue',
      apiPrefix: '_content',
      dir: 'content',
      nestedProperties: [],
      liveEdit: true,
      useCache: false,
      yaml: {},
      csv: {},
      xml: {},
      extendParser: {}
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
  },
  googleAnalytics: {
    id: 'G-ZSGVG6JD6K'
  },
}
