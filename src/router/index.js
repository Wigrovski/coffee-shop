import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import GoodsView from '../views/GoodsView.vue'
import ContactView from '../views/ContactView.vue'
import ThanksView from '../views/ThanksView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/goods', component: GoodsView },
    { path: '/contact', component: ContactView },
    { path: '/thanks', component: ThanksView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router