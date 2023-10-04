import {Image, File, PortableTextBlock} from '@sanity/types'

export type SanityHome = {
    _type: 'home'
    modules: SanityModule[]
    seo: SanitySEO
}

export type SanityPage = {
    _type: 'page'
    slug?: string
    title: string
    body: PortableTextBlock[]
    seo: SanitySEO
}

export type SanitySettings = {
    _type: 'settings'
    seo: SanitySEO
    menu: {links: SanityLink[]}
    notFoundPage: SanityNotFoundPage
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export type SanityLinkExternal = {
    _key: string;
    _type: 'linkExternal';
    targetBlank?: boolean;
    url: string;
    title: string;
}

export type SanityLinkInternal = {
    _key: string;
    _type: 'linkInternal';
    documentType: string;
    slug?: string;
    title: string;
}

export type SanityNotFoundPage = {
    body?: string;
    title: string;
}

export type SanitySEO = {
    _type: 'seo'
    title?: string
    description?: string
}

// export type SanityModule =

// export type SanityModule = {
//     _key?: string
//     _type: 'module.'
// }

type WithAlt<T> = {alt?: string} & T