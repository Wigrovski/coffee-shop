<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <nav-item
                :link="links.header.link"
                class-link="header__item"
            >
                <img 
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"/>
            </nav-item>
            <nav-item 
            v-for="link in links.other"
            :key="link.id"
            :link="link.link" 
            :text="link.text"
            class-link="header__item"
            ></nav-item>

        </ul>
    </header>
</template>

<script>
import NavItem from '@/components/NavItem.vue'

export default {
    components: { NavItem },
    computed: {
        links() {
            return this.$store.getters["getHeaderLinks"]
        }
    }
}
</script>
