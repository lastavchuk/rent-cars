import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';
import { modalReducer } from './modalSlice';
import { rootReducer } from './rootSlice';

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'lang'],
};

const carsPersistConfig = {
    key: 'cars',
    storage,
    whitelist: ['carsFavoriteId'],
};

export const store = configureStore({
    reducer: {
        root: persistReducer(rootPersistConfig, rootReducer),
        cars: persistReducer(carsPersistConfig, carsReducer),
        modal: modalReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
