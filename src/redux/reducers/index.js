import { combineReducers } from 'redux';
import products from './product'
import itemEditing from './itemEditing'
const myReducer = combineReducers({
    products,
    itemEditing
})
export default myReducer;