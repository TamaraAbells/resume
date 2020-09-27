export default {
  target: 'static',
  srcDir: 'src/',
  components: true,

  generate: {
    dir: 'docs'
  },

  head: {
    title: 'Dan Beneventano – Resume',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'letter'
    }
  },

  css: ['@/assets/css/paper.css', '@/assets/css/inter/inter.css'],

  loading: { color: '#fff' },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  eslint: {
    cache: true
  },

  tailwindcss: {
    // add '~tailwind.config` alias - increases bundle size
    exposeConfig: true,
    configPath: '@/tailwind.config.js'
  }
}
