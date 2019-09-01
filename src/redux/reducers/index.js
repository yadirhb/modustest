import { combineReducers } from 'redux';
import cart from './cart';

const AppReducer = combineReducers({
    cart
});

export default (state, action) => {
    return AppReducer(state, action);
};
