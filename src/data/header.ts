type Submenu = {
    text: string,
    link: string
}

type Header = {
    text: string,
    link: string,
    submenu?: Submenu[]
}

export const header: Header[] = 
[
    {
        text : 'home',
        link: '/',
        submenu:
        [
            {
            text: 'How It Works',
            link: '#how-it-works',
            },
            {
            text: 'Benefits',
            link: '#benefits',
            },
            {
            text: 'testimonials',
            link: '#testimonials',
            }
        ]
    },
    {
            text: 'pricing',
            link: '/pricing',
    },
    {
            text: 'login',
            link: '/login',     
    },
    {
        text: 'create',
        link: '/create'
    }
]