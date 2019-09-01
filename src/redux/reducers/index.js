import { combineReducers } from 'redux';
import cart from './cart';
import items from './items';

const AppReducer = combineReducers({
    cart,
    items
});

export default (state, action) => {
    return AppReducer(state, action);
};
