import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectFilter } from 'redux/selectors';
import { changeCurrentPage, setFilter } from 'redux/cars/carsSlice';

import CarList from 'components/Cars/CarList';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';
import { filteredCars } from 'services/helpers';

function CatalogPage() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(changeCurrentPage(1));
        dispatch(setFilter(null));
    }, [dispatch]);

    const allCars = useSelector(selectAllCars);

    const onFilter = filterTerm => {
        dispatch(setFilter(filterTerm));
    };

    return (
        <Container>
            <Filter filter={filter} onFilterChange={onFilter} />
            <CarList arrCars={filteredCars(filter, allCars)} />
        </Container>
    );
}
export default CatalogPage;
