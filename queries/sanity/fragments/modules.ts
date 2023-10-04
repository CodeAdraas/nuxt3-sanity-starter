import {groq} from '#imports'

export const MODULES = groq`
    _key,
    _type,
    (_type == "module.") => {
        ${}
    },
`