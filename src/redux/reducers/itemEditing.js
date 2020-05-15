import * as types from "../constants/ActionTypes";

let initialState = {};
// let findIndex = (products, id) => {
//   let result = -1;
//   products.forEach((product, index) => {
//     if (product.id === id) {
//       result = index;
//     }
//   });
//   return result;
// };

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      state = action.product;
      return {...state};

    default:
      return {...state};
  }
};

export default itemEditing;
