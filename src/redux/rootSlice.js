import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilled = state => {
    state.isLoading = false;
};

const rootSlice = createSlice({
    name: 'root',
    initialState: { lang: 'en', theme: false, isLoading: false, error: null },
    reducers: {
        changeLang(state, action) {
            state.lang = action.payload;
        },
        changeTheme(state, action) {
            state.theme = action.payload;
        },
        setError: state => {
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addMatcher(
                action => action.type.endsWith('/pending'),
                handlePending
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                handleRejected
            )
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                handleFulfilled
            );
    },
});

export const { changeLang, changeTheme, setError } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
