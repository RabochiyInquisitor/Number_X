import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    level: 'Easy', // начальное состояние темы
};

const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        setLevel(state = initialState, action: PayloadAction<string>) {
            state.level = action.payload; 
            console.log(action.payload)
            LoadToAsyncStorage('level', action.payload)
        },
    },
});

export const { setLevel } = levelSlice.actions;
export const levelReducer = levelSlice.reducer;