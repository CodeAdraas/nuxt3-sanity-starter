import {groq} from '#imports'
import {PORTABLE_TEXT} from './portableText/portableText'

export const PAGE_SECTION = groq`
    anchordId,
    body[]{
        ${PORTABLE_TEXT}
    }
`