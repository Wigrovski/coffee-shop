<template>
    <main>
        <div class="banner coffepage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">Our Coffee</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <form action="#" class="shop__search">
                            <label class="shop__search-label" for="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input">
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop__filter">
                            <div class="shop__filter-label">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn">Brazil</button>
                                <button class="shop__filter-btn">Kenya</button>
                                <button class="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card
                            v-for="card in coffee"
                            :key="card.id"
                            :name="card.name"
                            :price="card.price"
                            :image="card.image"
                            class-link="shop__item" 
                            class-title="shop__item-title"
                            class-price="shop__item-price" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCard from '@/components/ProductCard.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
    components: {NavBarComponent, ProductCard},
    data() {
        return {
            coffee: [
        {
            id:  uuidv4(),
            name: 'Solimo Coffee Beans 2kg',
            link: '/',
            image: 'coffee-1.jpg',
            price:  10.73,
        },
        {
            id:  uuidv4(),
            name: 'Presto Coffee Beans 1kg',
            link: '/',
            image: 'coffee-2.jpg',
            price:  15.99,
        },
        {
            id:  uuidv4(),
            name: 'AROMISTICO Coffee 1kg',
            link: '/',
            image: 'coffee-3.jpg',
            price: 6.99,
        },
        {
            id:  uuidv4(),
            name: 'Solimo Coffee Beans 2kg',
            link: '/',
            image: 'coffee-1.jpg',
            price:  10.73,
        },
        {
            id:  uuidv4(),
            name: 'Presto Coffee Beans 1kg',
            link: '/',
            image: 'coffee-2.jpg',
            price:  15.99,
        },
        {
            id:  uuidv4(),
            name: 'AROMISTICO Coffee 1kg',
            link: '/',
            image: 'coffee-3.jpg',
            price: 6.99,
        },
    ]
        }
    }
}


</script>