import { v4 as uuidv4 } from 'uuid'

const goods = {
    state: {
        goods: [
            {
                id: uuidv4(),
                name: 'Solimo Coffee Beans 2kg',
                link: '/',
                image: 'coffee-1.jpg',
                price: 10.73,
            },
            {
                id: uuidv4(),
                name: 'Presto Coffee Beans 1kg',
                link: '/',
                image: 'coffee-2.jpg',
                price: 15.99,
            },
            {
                id: uuidv4(),
                name: 'AROMISTICO Coffee 1kg',
                link: '/',
                image: 'coffee-3.jpg',
                price:8.99,
            },
            {
                id: uuidv4(),
                name: 'Solimo Coffee Beans 2kg',
                link: '/',
                image: 'coffee-1.jpg',
                price: 11.73,
            },
            {
                id: uuidv4(),
                name: 'Presto Coffee Beans 1kg',
                link: '/',
                image: 'coffee-2.jpg',
                price: 20.99,
            },
            {
                id: uuidv4(),
                name: 'AROMISTICO Coffee 1kg',
                link: '/',
                image: 'coffee-3.jpg',
                price: 16.99,
            },
        ]
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