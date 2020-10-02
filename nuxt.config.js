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
      { hid: 'description', name: 'description', content: 'Full Stack Software Engineer. Founder of CometX.io.' },
      { hid: 'og:description', property: 'og:description', content: 'Full Stack Software Engineer. Founder of CometX.io.' },
      { hid: 'og:title', property: 'og:title', content: 'Dan Beneventano – Resume' },
      { hid: 'og:image', property: 'og:image', content: 'https://resume.danbeneventano.me/headshot.jpg' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'danbeneventano.me' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@dan_b__' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@dan_b__' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'letter'
    },
    htmlAttrs: {
      lang: 'en'
    }
  },

  css: ['@/assets/css/inter/inter.css', '@/assets/css/paper.css', '@/assets/css/main.css'],

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
