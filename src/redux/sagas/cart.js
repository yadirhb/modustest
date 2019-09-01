import { put, takeLatest } from 'redux-saga/effects';
import constants from '../actions/cart';
import { store } from '../store';

function* cart() {
    yield put({ type: constants.GET_CART_REQUEST });
    yield put({ type: constants.GET_CART_SUCCESS });
}

function* addProductToCart(action) {
    const { product } = action;
    const { data } = store.getState().cart;

    if (product) {
        if (Object.keys(data).length < 5) { // Allows up to 5 different products to be selected.
            let sum = 0;
            Object.values(data).forEach(item => sum += item.amount);
            if (sum < 10) { // Allows up to a maximimum of 10 different items in total to be selected
                if (!data[product.id] || data[product.id].amount < 3) { // Allows up to 3 items of the same product to be selected
                    yield put({ type: constants.ADD_LOCAL_CART, data: product });
                } else {
                    // This should sets an error state in here ... 
                    alert("You cannot add more than 3 items of the same type.")
                }
            } else {
                // This should sets an error state in here ... 
                alert("You can select only a maximum of 10 items.")    
            }
        } else {
            // This should sets an error state in here ... 
            alert("You cannot select more than 5 different items.")
        }
    }
}

export default [
    takeLatest(constants.GET_CART, cart),
    takeLatest(constants.ADD_TO_CART, addProductToCart),
];
