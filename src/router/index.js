import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ForYourPlasure from '../views/GoodsView.vue'
import ContactView from '../views/ContactView.vue'
import ThanksView from '../views/ThanksView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/for-yor-plasure', component: ForYourPlasure },
    { path: '/contact', component: ContactView },
    { path: '/thanks', component: ThanksView },
    { name: 'coffee', path: '/our-coffee/:id', component: ItemView },
    { name: 'goods', path: '/for-yor-plasure/:id', component: ItemView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router