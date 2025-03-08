import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './slices/theme.slice';
import { scoreReducer } from './slices/score.slice';
import { levelReducer } from './slices/level.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    theme: themeReducer,
    score: scoreReducer,
    level: levelReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
})

export const persistor = persistStore(Store)

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;