<template>
    <div :class="classLink">
        <img :src="require(`@/assets/img/${image}`)" alt="image">
        <div :class="classTitle">
            {{ name }}
        </div>
        <div :class="classPrice">{{price}}$</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                require: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
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
        }
    }

</script>