import {groq} from '#imports'
import {SEO} from './seo'
import {MENU_LINKS} from './menuLinks'

export const SETTINGS = groq`
    menu{
        ${MENU_LINKS}
    },
    notFoundPage,
    seo{
        ${SEO}
    }
`