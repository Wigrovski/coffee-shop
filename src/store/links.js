import { v4 as uuidv4 } from 'uuid'

const links = {
    state: {
            header: {
                id:  uuidv4(),
                text: '',
                link: '/',
                icon: 'Logo.svg',
            },
            footer: {
                id:  uuidv4(),
                text: '',
                link: '/',
                icon: 'Logo_black.svg',
            },
            other: [
            
                {
                    id:  uuidv4(),
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id:  uuidv4(),
                    text: 'For your pleasure',
                    link: '/for-your-pleasure',
                },
                {
                    id:  uuidv4(),
                    text: 'Contact us',
                    link: '/contact',
                },
            ]       
        },
    getters: {
        getHeaderLinks(state) {
            return {header: state.header, other: state.other }
        },
        getFooterLinks(state) {
            return {footer: state.footer, other: state.other }
        },

    }
}

export default links