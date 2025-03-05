import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
    bestScore: 0, 
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScore(state = initialState, action: PayloadAction<number>) {
            state.bestScore = action.payload;
            LoadToAsyncStorage('bestScore', action.payload)
        },
    },
});

export const { setScore } = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;