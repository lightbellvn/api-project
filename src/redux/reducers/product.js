import * as types from './../constants/ActionTypes'

let initialState = [
    // {
    //     id: 'A001',
    //     name: 'Iphone 12 Pro Max',
    //     price: '1200',
    //     status: '',
    // },
    // {
    //     id: 'A002',
    //     name: 'Samsung Galaxy NOte 12',
    //     price: '1000',
    //     status: '',
    // },
    // {
    //     id: 'A003',
    //     name: 'Xiaomi Note 10 Pro',
    //     price: '800',
    //     status: '',
    // },
]
let findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

const products = (state = initialState, action)=>{
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
            
        case types.DELETE_PRODUCT:
            
            let index = findIndex(state, action.id);
            state.splice(index, 1)
            return [...state];
        case types.ADD_PRODUCT:
            
            state.push(action.product)
            return [...state];

    
        default:
            return state;
    }
}

export default products