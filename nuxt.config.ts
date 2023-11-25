export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    modules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/sanity', {
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_PROJECT_DATASET,
            useCdn: false
        }],
        '@on-247/nuxt-util'
    ],

    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                // { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
                // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                // { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png" },
            ]
        },
    },

    css: [
        '~/assets/css/app.scss'
    ],

    ssr: true,
    sourcemap: false,
    experimental: {
        payloadExtraction: true
    }
})