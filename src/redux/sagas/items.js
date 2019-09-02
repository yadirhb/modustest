import { call, put, takeLatest } from 'redux-saga/effects';
import constants from '../actions/items';
import { store } from '../store';
import itemsServiceMock from '../services/items.service.mock';

function* items(action) {
    yield put({ type: constants.GET_ITEMS_REQUEST });
    try {
        const data = yield call(itemsServiceMock.getItems);
        yield put({ type: constants.GET_ITEMS_SUCCESS, data: data.map((item, key) => !item.id ? { ...item, id: key } : item) });
    } catch (error) {
        let errorMessage = 'Error when retrieving items';
        if (error && error.message) {
            errorMessage = error.message;
        }

        yield put({ type: constants.GET_ITEMS_FAIL, error: errorMessage });
    }
}

function* searchItems(action) {
    yield put({ type: constants.SEARCH_ITEMS_REQUEST });

    try {
        const data = yield call(itemsServiceMock.search, action.criteria);        
        yield put({ type: constants.SEARCH_ITEMS_SUCCESS, data: data.map((item, key) => !item.id ? { ...item, id: key } : item) });
    } catch (error) {

        let errorMessage = 'Error when retrieving items';
        if (error.message.includes("504")) {
            errorMessage = "Error with the criteria. Must be alphanum."
        } else if (error && error.message) {
            errorMessage = error.message;
        }

        yield put({ type: constants.SEARCH_ITEMS_FAIL, error: errorMessage });
    }
}

export default [
    takeLatest(constants.GET_ITEMS, items),
    takeLatest(constants.SEARCH_ITEMS, searchItems),
];
