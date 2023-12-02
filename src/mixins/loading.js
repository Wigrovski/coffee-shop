
export const loading = {
    computed: {
        loading() {
            return this.$store.getters["getIsLoading"]
        }
    },
    beforeMount() {
        this.$store.dispatch("setIsLoading", true)
        setTimeout(() => {
            this.$store.dispatch("setIsLoading", false)
        }, 500)
    },
}