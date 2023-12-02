import { v4 as uuidv4 } from 'uuid'

const goods = {
    state: {
        goods: []
    },
    mutations: {
        setGoodsData(state, data) {
            state.goods = data
        }
    },
    actions: {
        setGoodsData({ commit }, data) {
            commit('setGoodsData', data)
        }
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
        getProductByPleasure(state) {
            return (id) => {
                return state.goods.find((card) => id === card.id)
            }
        }

    }
}

export default goods