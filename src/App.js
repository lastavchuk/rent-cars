import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Notification from 'components/Notification/Notification';

import { addFavoriteData } from 'redux/cars/carsSlice';
import { fetchAllCarsThunk } from 'redux/cars/carsThunk';
import {
    selectAllCars,
    selectFavoriteCarsId,
    selectTheme,
} from 'redux/selectors';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

function App() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    useEffect(() => {
        dispatch(fetchAllCarsThunk());
    }, [dispatch]);

    useEffect(() => {
        if (theme) document.body.classList.add('dark');
    }, [theme]);

    const carsId = useSelector(selectFavoriteCarsId);
    const allCars = useSelector(selectAllCars);

    useEffect(() => {
        function setFavoriteCars(carsId) {
            const rez = carsId.map(
                carId => allCars[allCars.findIndex(car => carId === car.id)]
            );
            dispatch(addFavoriteData(rez));
        }
        if (!!allCars) setFavoriteCars(carsId);
    }, [allCars, carsId, dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="catalog" element={<CatalogPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Notification />
            {/* {isLoading && <Loader />} */}
        </>
    );
}

export default App;
