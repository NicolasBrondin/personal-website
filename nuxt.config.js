const lang_fr = require('./locales/fr.js');
const lang_en = require('./locales/en.js');

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: "Nicolas Brondin-Bernard - Freelance Web Engineer and Entrepreneur",
        meta: [
            { charset: "utf-8" },
            { hid: "author", name: "author", content: "Nicolas Brondin-Bernard"},
            { hid: "keywords", name: "keywords", content: "Nicolas Brondin-Bernard, Freelancer, Engineer, Web Developer, Entrepreneur, Kalico" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "og:type", name: "og:type", content: "website" },
            { hid: "twitter:image", name: "twitter:image", content: "https://nicolas.brondin-bernard.com/cover.jpg?t=1" },
            { hid: "og:image", name: "og:image", content: "https://nicolas.brondin-bernard.com/cover.jpg?t=1" },
            { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
            { hid: "twitter:site", name: "twitter:site", content: "@NicolasBrondin" },
            // MICRO-DATA //
            { itemprop:"name", content:"Nicolas Brondin-Bernard"},
            { itemprop:"author", content:"Nicolas Brondin-Bernard"},
            { itemprop:"funder", content:"Nicolas Brondin-Bernard"},
            { itemprop:"inLanguage", content:"en"},
            { itemprop:"image", content:"https://nicolas.brondin-bernard.com/cover.jpg?t=1"},
            { itemprop:"url", content:"https://nicolas.brondin-bernard.com"},
            // PER PAGE //
            { hid: "twitter:title", name: "twitter:title", content: "Nicolas Brondin-Bernard - Freelance Web Engineer and Entrepreneur" },
            { hid: "twitter:text:title", name: "twitter:text:title", content: "Nicolas Brondin-Bernard - Freelance Web Engineer and Entrepreneur" },
            { hid: "og:title", name: "og:title", content: "Nicolas Brondin-Bernard - Freelance Web Engineer and Entrepreneur" },
            { hid: "description", name: "description", content: "Kalico co-founder, streamer on Twitch, proud husband, based in Tours, France." },
            { hid: "og:description", name: "og:description", content: "Kalico co-founder, streamer on Twitch, proud husband, based in Tours, France." },
            { hid: "twitter:description", name: "twitter:description", content: "Kalico co-founder, streamer on Twitch, proud husband, based in Tours, France." }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,100italic,400,300italic,700', type: 'text/css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900', type: 'text/css' }
        ]
    },
    loading: { color: '#fff' },
    css: [],
    plugins: [
        /*{ src: "~plugins/crisp.js", ssr: false }*/
    ],
    modules: [
        ['@nuxtjs/google-analytics', {
            id: process.env.NODE_ENV === 'production' ? 'UA-54530793-1' : 'UA-000000-1',
            disabled: false
        }],
        /*['nuxt-facebook-pixel-module', {
            track: 'PageView',
            pixelId: '493334161070641',
            disabled: true
        }],*/
        ['nuxt-i18n', {
            baseUrl: 'https://kalico.shop',
            locales: [
                {
                  code: 'en',
                    iso: 'en-US'
                },
                {
                  code: 'fr',
                  iso: 'fr-FR'
                }
              ],
            defaultLocale: 'fr',
            parsePages: false,   // Disable acorn parsing
            vueI18n: {
                fallbackLocale: 'en',
                silentTranslationWarn: false,
                messages: {
                    en: lang_en,
                    fr: lang_fr
                }
            }
        }],
        ['@nuxtjs/sitemap'],
        ['nuxt-fontawesome', {
            component: 'fa', 
            imports: [
              //import whole set
              {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
              },
              //import 2 icons from set 
              // please note this is PRO set in this example, 
              // you must have it in your node_modules to actually import
              
            ]
          }]
    ],
    sitemap: {
        hostname: 'https://nicolas.brondin-bernard.com',
        gzip: true,
        exclude: [
        ]
    },
    build: {
        extend: function(config, ctx) {}
    },
    generate: {
    }
}
