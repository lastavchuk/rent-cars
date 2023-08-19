import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCarsData, selectFilter } from 'redux/selectors';
import { changeCurrentPage, setFilter } from 'redux/cars/carsSlice';

import CarList from 'components/Cars/CarList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import { filteredCars } from 'services/helpers';

function FavoritesPage() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(changeCurrentPage(1));
        dispatch(setFilter(null));
    }, [dispatch]);

    const favoriteCars = useSelector(selectFavoriteCarsData);

    const onFilter = filterTerm => {
        dispatch(setFilter(filterTerm));
    };

    return (
        <Container>
            <Filter filter={filter} onFilterChange={onFilter} />
            <CarList arrCars={filteredCars(filter, favoriteCars)} />
        </Container>
    );
}
export default FavoritesPage;
