// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: {
    dirs: ['composables', 'composables/**', 'types', 'types/**'],
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  ssr: false,

  app: {
    baseURL: '/website/', // 例: '/kiminokoe/'
    buildAssetsDir: 'assets',
  },

  nitro: {
    output: {
      dir: 'docs',
      publicDir: 'docs',
    },
  },
})
