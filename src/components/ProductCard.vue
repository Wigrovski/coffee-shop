<template>
    <div :class="classLink" @click="logEmmit(card.id)">
        <img :src="card.image" :alt="card.image"/>
        <div :class="classTitle">
            {{ card.name }}
        </div>
        <div :class="classPrice">{{card.price | addCurrency}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            classLink: {
                type: String,
                required: true,
            },
            classTitle: {
                type: String,
                required: true,
            },
            classPrice: {
                type: String,
                required: true,
            },
            card: {
                type: Object,
                required: true
            }
        },
        methods: {
            logEmmit(id) {
                this.$emit('onNavigate', id)
            }
        },
    }

</script>