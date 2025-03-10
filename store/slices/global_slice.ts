import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    global: {
        score: {
            Easy: 0,
            Middle: 0,
            Hard: 0
        },
        time: {
            Easy: "00:00",
            Middle: "00:00",
            Hard: "00:00"
        }
    },
};

const globalSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        setGlobalScore(state = initialState, action: PayloadAction<{key : 'score' | 'time'; level : 'Easy' | 'Middle' | 'Hard'; score? : number; time? : string }>) {
            const { level, score, time, key } = action.payload;
            score ? state.global[key][level] = score : time ? state.global[key][level] = time : null
        },
        resetGlobalState(state) {
            return initialState; // Сброс состояния к начальному
        },
    },
});

export const Total = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

