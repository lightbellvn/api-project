import * as types from './../constants/ActionTypes'
import callApi from './../../utils/apiCaller'

export const fetchProductRequest = () => {
return dispatch => {
    return callApi('products', 'GET', null).then(res => {
        dispatch(fetchProduct(res.data))
    })
}
}

export const fetchProduct = products => {
    return {
        type: types.FETCH_PRODUCT,
        products
    }
}
export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT
    }
}
export const updateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT
    }
}
export const toggleStatus = product => {
    return {
        type: types.TOGGLE_STATUS
    }
}
export const saveProduct = product => {
    return {
        type: types.SAVE_PRODUCT
    }
}