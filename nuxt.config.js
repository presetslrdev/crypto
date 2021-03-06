import webpack from 'webpack'

export default {
  modern: true,
  head: {
    title: 'CryptoCourse',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Простое и удобное приложение для управления собственными криптокошельками. Закажите банковскую карту CryptoCourse и получите прямой доступ к сделкам с криптовалютой.'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'CryptoCourse: криптокошелёк и банковская карта в одном приложении'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
      }
    ]
  },
  css: [
    '~/assets/css/bootstrap.min.css',
  ],
  styleResources: {
    scss: ['~/assets/scss/common.scss']
  },

  plugins: [
    {
      src: '~/plugins/tiny-slider.js',
      mode: 'client',
    }
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-gsap-module'
  ],
  gsap: {
    extraPlugins: {
      // scrollTo: true,
      scrollTrigger: true
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n', ['vue-scrollto/nuxt', {
      duration: 600,
      offset: -80
    }]
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: ['ru', 'en']
    },
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        name: 'Русский',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
    vueI18nLoader: true,
  },
  axios: {},
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default:  0.0.0.0
  }
}
