import { v4 as uuidv4 } from 'uuid'

const bestsellers = {
    state: {
        bestsellers: [],
    },
    mutations: {
        setBestData(state, data) {
            state.bestsellers = data
        }
    },
    actions: {
        setBestData({ commit }, data) {
            commit('setBestData', data)
        }
    },
    getters: {
        getBestsellers(state) {
            return state.bestsellers
        },
    }

}

export default bestsellers