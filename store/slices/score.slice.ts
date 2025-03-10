import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
    bestScore: 5, 
};

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setBestScore(state = initialState, action: PayloadAction<number>) {
            state.bestScore = action.payload;
        },
    },
});

export const { setBestScore } = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;