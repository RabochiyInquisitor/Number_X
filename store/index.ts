import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './slices/theme.slice';
import { scoreReducer } from './slices/score.slice';
import { levelReducer } from './slices/level.slice';

export const Store = configureStore({
    reducer: {
        theme: themeReducer,
        score: scoreReducer,
        level: levelReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;