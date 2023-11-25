import {groq} from '#imports'
import {LINK_EXTERNAL} from './linkExternal'
import {LINK_INTERNAL} from './linkInternal'

export const MENU_LINKS = groq`
    _type,
    links[]->{
        (_type == "linkExternal") => {
            ${LINK_EXTERNAL}
        },
        (_type == "linkInternal") => {
            ${LINK_INTERNAL}
        }
    }
`