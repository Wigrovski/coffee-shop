<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                    <nav-item
                        :link="links.footer.link"
                        class-link="footer__item"
                    >
                        <img 
                        :src="require(`@/assets/logo/${links.footer.icon}`)"
                        :alt="links.footer.icon"/>
                    </nav-item>
                    <nav-item 
                        v-for="link in links.other"
                        :key="link.id"
                        :link="link.link" 
                        :text="link.text"
                        class-link="footer__item"
                    >
                    </nav-item>
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>

import NavItem from '@/components/NavItem.vue'

import { v4 as uuidv4 } from 'uuid'

export default {
    components: { NavItem },
    data() {
        return {
            links: {
                footer: {
                    id: uuidv4(),
                    text: '',
                    link: '/',
                    icon: 'Logo_black.svg',
                },
                other: [
                
                {
                    id: uuidv4(),
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id: uuidv4(),
                    text: 'For your pleasure',
                    link: '/goods',
                },
                {
                    id: uuidv4(),
                    text: 'Contact us',
                    link: '/contact',
                },
            ]
            }
        }
    }
}
</script>