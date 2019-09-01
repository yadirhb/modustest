import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {store, sagaMiddleware} from './redux/store'
import rootSaga from './redux/sagas';
import DefaultLayer from './components/DefaultLayout';

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DefaultLayer />
      </PersistGate>
    </Provider>
  );
}

export default App;
