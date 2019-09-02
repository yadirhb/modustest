import { all } from 'redux-saga/effects';
import cart from './cart';
import items from './items';

export default function* rootSaga() {
    yield all([
      ...cart,
      ...items
    ])
  } 