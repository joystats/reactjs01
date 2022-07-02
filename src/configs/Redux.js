import { createStore, applyMiddleware } from 'redux'
import Reducers from '../reducers';
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
    key: 'root',
    storage: storage
}
const persistedReducer = persistReducer(config, Reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, persistor }