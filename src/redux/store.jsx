import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import { rootReducer } from './rootReducer';

const middlewares = [thunk]


const persistConfig = {
   key: 'root',
   storage: storage,
   stateReconciler: autoMergeLevel1
}




const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)