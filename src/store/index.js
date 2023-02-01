import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import storage from './sync_storage';
import productReducer from './slices/product-slice';
import cartReducer from './slices/cart-slice';
import wishlistReducer from './slices/wishlist-slice';
import compareReducer from './slices/compare-slice';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
        }
        // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const makeStore = ({ isServer }) => {
    if (isServer) {
      //If it's on server side, create a store
        return createStore(combinedReducer, bindMiddleware([]));
    } else {
      //If it's on client side, create a store which will persist
        const { persistStore, persistReducer } = require('redux-persist');
    
        const persistConfig = {
            key: 'lezada',
            storage, 
        };
    
        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer
    
        const store = createStore(
            persistedReducer,
            bindMiddleware([])
        ); // Creating the store again
    
        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
    
        return store;
    }
};

export const wrapper = createWrapper(makeStore)