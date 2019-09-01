import constants from '../actions/cart';

const initialState = {
    loading: false,
    error: undefined,
    data: {}
};

function addToCart(state, action) {
    let items = [];
    if (state.data[action.data.id]) {
        items[action.data.id] = { ...state.data[action.data.id], amount: state.data[action.data.id].amount + 1 };
        items = { ...state.data, ...items };
    } else items = { ...state.data, ...{ [action.data.id]: { ...action.data, amount: 1 } } };

    return { ...state, data: items };
}

function removeFromCart(state, action) {
    let items = [];
    if (state.data[action.product.id] && state.data[action.product.id].amount > 1 && !action.all) {
        items[action.product.id] = { ...state.data[action.product.id], amount: state.data[action.product.id].amount - 1 };
        items = { ...state.data, ...items };
    } else {
        delete state.data[action.product.id];
        items = { ...state.data };
    }

    return { ...state, data: items };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_CART_REQUEST:
            return { ...state, loading: true, error: undefined };
        case constants.GET_CART_SUCCESS:
            return { ...state, loading: false, data: { ...state.data, ...action.data } };
        case constants.GET_CART_FAIL:
            return { ...state, loading: false, error: action.error };
        case constants.ADD_TO_CART_FAIL:
            return { ...state, error: action.error };
        case constants.ADD_LOCAL_CART:
            return addToCart({ ...state, error: undefined }, action)
        case constants.REMOVE_FROM_CART:
            return removeFromCart({ ...state, error: undefined }, action);
        case constants.REMOVE_ALL_FROM_CART:
            return { ...state, data: [] };
        default:
            return state;
    }
}