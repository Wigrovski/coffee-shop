export const navigate = {
    methods: {
        navigate(id) {
            this.$router.push({name: this.name, params: {id: id}})
        }
    }
}