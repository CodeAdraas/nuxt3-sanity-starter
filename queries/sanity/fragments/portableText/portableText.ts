import {groq} from '#imports'
import {MARK_DEFS} from './markDefs'

export const PORTABLE_TEXT = groq`
    ...,
    (_type == 'module.') => {
        '_type': 'module.',
        ${},
    },
    markDefs[] {
        ${MARK_DEFS}
    }
`