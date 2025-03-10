import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    filter: 'bestHardTime', 
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state = initialState, action: PayloadAction<string>) {
            state.filter = action.payload; 
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;