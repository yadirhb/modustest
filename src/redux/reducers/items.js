import constants from '../actions/items';

const initialState = {
    loading: false,
    error: undefined,
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_ITEMS_REQUEST:
            return { ...state, loading: true, error: undefined };
        case constants.GET_ITEMS_SUCCESS:
            return { ...state, loading: false, data: { ...state.data, ...action.data } };
        case constants.GET_ITEMS_FAIL:
            return { ...state, loading: false, error: action.error };
        case constants.SEARCH_ITEMS_REQUEST:
            return { ...state, loading: true, error: undefined, data: {}};
        case constants.SEARCH_ITEMS_SUCCESS:
            return { ...state, loading: false, data: { ...action.data } };
        case constants.SEARCH_ITEMS_FAIL:
                return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}