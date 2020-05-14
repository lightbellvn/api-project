import * as types from './../constants/ActionTypes'

let initialState = [
    {
        id: 'A001',
        name: 'Iphone 12 Pro Max',
        price: '1200',
        status: '',
    },
    {
        id: 'A002',
        name: 'Samsung Galaxy NOte 12',
        price: '1000',
        status: '',
    },
    {
        id: 'A003',
        name: 'Xiaomi Note 10 Pro',
        price: '800',
        status: '',
    },
]

const products = (state = initialState, action)=>{
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.products
            return [...state]

    
        default:
            return state;
    }
}

export default products