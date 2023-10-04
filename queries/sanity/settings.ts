import {groq} from '#imports'
import {SEO} from './fragments/seo'
import {LINK_EXTERNAL} from './fragments/linkExternal'
import {LINK_INTERNAL} from './fragments/linkInternal'

export const SETTINGS_QUERY = groq`
    *[_type == 'settings']{
        menu {
            _type,
            links[]->{
                (_type == "linkExternal") => {
                    ${LINK_EXTERNAL}
                },
                (_type == "linkInternal") => {
                    ${LINK_INTERNAL}
                }
            }
        },
        notFoundPage,
        ${SEO}
    }[0]
`