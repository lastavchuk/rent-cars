import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAllCarsThunk,
    getCarThunk,
    addCarThunk,
    delCarThunk,
} from './carsThunk';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        carsData: null,
        carsFavoriteId: [],
        carsFavoriteData: [],
        filter: null,
        currentPage: 1,
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        changeFavoriteId: (state, action) => {
            const idx = state.carsFavoriteId.findIndex(
                el => el === action.payload
            );
            if (idx === -1) {
                state.carsFavoriteId.push(action.payload);
            } else {
                state.carsFavoriteId.splice(idx, 1);
            }
        },
        addFavoriteData: (state, action) => {
            state.carsFavoriteData = action.payload;
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
                state.carsData = action.payload;
            })
            .addCase(getCarThunk.fulfilled, (state, action) => {})
            .addCase(addCarThunk.fulfilled, (state, action) => {})
            .addCase(delCarThunk.fulfilled, (state, action) => {});
    },
});

export const {
    changeCurrentPage,
    changeFavoriteId,
    addFavoriteData,
    setFilter,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
