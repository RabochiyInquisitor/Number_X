import { LoadToAsyncStorage } from '@/utils/AsyncStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    theme: 'city' | 'forest' | 'sakura';
}

const initialState: ThemeState = {
    theme: 'sakura',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state = initialState, action: PayloadAction<'city' | 'forest' | 'sakura'>) {
            state.theme = action.payload; 
            LoadToAsyncStorage('theme', action.payload)
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;