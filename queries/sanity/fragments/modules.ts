import {groq} from '#imports'
import {MODULE_ACCORDION} from './modules/accordion'

export const MODULES = groq`
    _key,
    _type,
    (_type == "module.accordion") => {
        _type: "module.accordion",
        ${MODULE_ACCORDION}
    },
`