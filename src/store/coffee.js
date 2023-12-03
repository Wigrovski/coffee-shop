import { v4 as uuidv4 } from 'uuid'

const coffee = {
    state: {
        coffee: [],
        searchValue: '',
        sortValue: ''
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
        setSortValue(state, value) {
            state.sortValue = value
        },
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data)
        },
        setSearchValue({ commit }, value) {
            commit('setSearchValue', value)
        },
        setSortValue({ commit }, value) {
            commit('setSortValue', value)
        },
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getProductByCoffee(state) {
            return (id) => {
                return state.coffee.find((card) => id == card.id)
            }
        },
        getSearchValue(state) {
            return state.searchValue
        },
    }
}

export default coffee