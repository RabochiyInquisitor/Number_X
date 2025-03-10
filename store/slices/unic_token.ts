import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
    token: "", 
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken(state = initialState, action: PayloadAction<string>) {
            state.token = action.payload;
        },
    },
});

export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;