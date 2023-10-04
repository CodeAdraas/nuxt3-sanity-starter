import {groq} from '#imports'
import {MODULES} from '../modules'
import {SEO} from '../seo'

export const PAGE = groq`
    title,
    body[] {
        ${MODULES}
    },
    ${SEO}
`