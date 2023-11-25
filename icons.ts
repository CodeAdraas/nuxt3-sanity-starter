interface IconTemplate {
    defaultColor: string
    stroke?: boolean
    viewBox?: string
    template: string[]
    defaultSizes: {
        width?: number
        height?: number
    }
}

export const Menu = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="3" y1="12" x2="21" y2="12"></line>',
        '<line x1="3" y1="6" x2="21" y2="6"></line>',
        '<line x1="3" y1="18" x2="21" y2="18"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const Minus = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="5" y1="12" x2="19" y2="12"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const Plus = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="12" y1="5" x2="12" y2="19"></line>',
        '<line x1="5" y1="12" x2="19" y2="12"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const X = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="18" y1="6" x2="6" y2="18"></line>',
        '<line x1="6" y1="6" x2="18" y2="18"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}