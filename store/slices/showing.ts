import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
    time: true,
    free: true 
};

const showingSlice = createSlice({
    name: 'showing',
    initialState,
    reducers: {
        setTimeShowing(state = initialState, action: PayloadAction<boolean>) {
            state.time = action.payload;
            console.log(state.time)
        },
        setFreeShowing(state = initialState, action: PayloadAction<boolean>) {
            state.free = action.payload;
            console.log(state.free)
        },
    },
});

export const { setTimeShowing } = showingSlice.actions;
export const { setFreeShowing } = showingSlice.actions;
export const showingReducer = showingSlice.reducer;