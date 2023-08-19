import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCarsData, selectLang } from 'redux/selectors';
import { parseAdress } from 'services/helpers';
import sprite from '../../images/sprite.svg';
import langOprions from '../../assests/lang/langList';
import { StyledCar } from './Car.styled';
import Button from 'components/Button/Button';
import { changeFavoriteId } from 'redux/cars/carsSlice';

const Car = ({ carInfo, handlerOpenModal }) => {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);
    const favoriteCars = useSelector(selectFavoriteCarsData);

    const {
        id,
        img,
        year,
        make,
        model,
        type,
        rentalPrice,
        mileage,
        rentalCompany,
        description,
        accessories,
        address,
    } = carInfo;

    const newAdress = parseAdress(address);

    function onFavorite(evt) {
        evt.currentTarget.classList.toggle('card-favorite');
        dispatch(changeFavoriteId(Number(evt.currentTarget.dataset.id)));
    }

    function isFavorite(id) {
        const idx = favoriteCars.findIndex(car => car.id === id);
        if (idx === -1) return false;
        return true;
    }

    return (
        <StyledCar>
            <button
                data-id={id}
                className={
                    !isFavorite(id)
                        ? 'card-btn-hearth'
                        : 'card-btn-hearth card-favorite'
                }
                type="button"
                onClick={onFavorite}
            >
                <svg
                    width="18"
                    height="18"
                    aria-label={langOprions.addToFavorite[lang]}
                >
                    <use href={sprite + '#icon-heart'} />
                </svg>
            </button>

            <img
                className="card-img"
                width="274"
                height="268"
                src={img}
                alt={description}
                loading="lazy"
            />
            <h2 className="card-title">
                <span>
                    {make} <span className="card-title-color">{model}</span>,{' '}
                    {year}
                </span>
                <span>${rentalPrice}</span>
            </h2>
            <div className="card-info">
                <span className="card-info-tag">{newAdress[1]}</span>
                <span className="card-info-tag">{newAdress[2]}</span>
                <span className="card-info-tag">{rentalCompany}</span>
            </div>
            <div className="card-info">
                <span className="card-info-tag">{type}</span>
                <span className="card-info-tag">{make}</span>
                <span className="card-info-tag">{mileage}</span>
                <span className="card-info-tag">{accessories[0]}</span>
            </div>
            <div className="btn-wrapper">
                <Button
                    onClick={() => handlerOpenModal(carInfo)}
                    text={langOprions.learnMore[lang]}
                />
            </div>
        </StyledCar>
    );
};

Car.propTypes = {
    carInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rentalPrice: PropTypes.number.isRequired,
        mileage: PropTypes.number.isRequired,
        rentalCompany: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        accessories: PropTypes.array.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
    handlerOpenModal: PropTypes.func.isRequired,
};

export default Car;
