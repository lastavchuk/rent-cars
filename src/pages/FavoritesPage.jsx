import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectFavoriteCarsData,
    selectFavoriteCarsId,
    selectFilter,
    selectLang,
} from 'redux/selectors';
import { changeCurrentPage, setFilter } from 'redux/cars/carsSlice';

import CarList from 'components/Cars/CarList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import { filteredCars } from 'services/helpers';
import langOprions from '../assests/lang/langList';

function FavoritesPage() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(changeCurrentPage(1));
        dispatch(setFilter(null));
    }, [dispatch]);

    const favoriteCars = useSelector(selectFavoriteCarsData);
    const favorites = useSelector(selectFavoriteCarsId);
    const lang = useSelector(selectLang);

    const onFilter = filterTerm => {
        dispatch(setFilter(filterTerm));
    };

    return (
        <Container>
            {!!favorites.length ? (
                <>
                    <Filter filter={filter} onFilterChange={onFilter} />
                    <CarList arrCars={filteredCars(filter, favoriteCars)} />
                </>
            ) : (
                <h3>{langOprions.noCarsFavorite[lang]}</h3>
            )}
        </Container>
    );
}
export default FavoritesPage;
