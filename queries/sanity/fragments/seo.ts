import {groq} from '#imports'
import { IMAGE } from './image'

export const SEO = groq`
    "seo": {
        "title": seo.title,
        "image": seo.image{
            ${IMAGE}
        }
    }
`