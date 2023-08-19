import { createAsyncThunk } from '@reduxjs/toolkit';
import { addCar, deleteCar, fetchAllCars, getCar } from 'services/api';

export const fetchAllCarsThunk = createAsyncThunk(
    'cars/fetchAllCarsThunk',
    async (_, thunkAPI) => {
        try {
            return await fetchAllCars();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getCarThunk = createAsyncThunk(
    'cars/getCarThunk',
    async (carId, thunkAPI) => {
        try {
            return await getCar(carId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const addCarThunk = createAsyncThunk(
    'cars/addCarThunk',
    async (carData, thunkAPI) => {
        try {
            return await addCar(carData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const delCarThunk = createAsyncThunk(
    'cars/delCarThunk',
    async (id, thunkAPI) => {
        try {
            return await deleteCar(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
