import { v4 as uuidv4 } from 'uuid'

const coffee = {
    state: {
        coffee: [
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
                price:6.99,
            },
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
                price: 6.99,
            },
        ]
    },
        getters: {
            getCoffee(state) {
                return state.coffee 
            },
            getProductByCoffee(state) {
                return (id) => {
                    return state.coffee.find((card) => id == card.id)
                }
            }
        }
    
}

export default coffee