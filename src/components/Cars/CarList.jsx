import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentPage,
    selectIsModalOpen,
    selectLang,
} from 'redux/selectors';

import { StyledCarList, StyledLoadMore, StyledTitle3 } from './CarList.styled';

import { changeCurrentPage } from 'redux/cars/carsSlice';
import { closeModal, openModal } from 'redux/modalSlice';

import Car from './Car';
import Modal from 'components/Modal/Modal';
import ModalDetail from 'components/Modal/ModalDetail';
import langOprions from '../../assests/lang/langList';

const COUNT_CARS = 8;

const CarList = ({ arrCars }) => {
    const dispatch = useDispatch();

    const currentPage = useSelector(selectCurrentPage);
    const isModalOpen = useSelector(selectIsModalOpen);
    const lang = useSelector(selectLang);

    function handlerDetailCarInfo(data) {
        document.body.style.overflow = 'hidden';
        dispatch(openModal(data));
    }

    function loadMore() {
        dispatch(changeCurrentPage(currentPage + 1));
    }

    return (
        <>
            {!!arrCars ? (
                arrCars.length > 0 ? (
                    <>
                        <StyledCarList>
                            {arrCars
                                .slice(0, currentPage * COUNT_CARS)
                                .map(car => (
                                    <Car
                                        key={car.id}
                                        carInfo={car}
                                        handlerOpenModal={handlerDetailCarInfo}
                                    />
                                ))}
                        </StyledCarList>
                        {currentPage <
                            Math.ceil(arrCars.length / COUNT_CARS) && (
                            <StyledLoadMore type="button" onClick={loadMore}>
                                {langOprions.loadMore[lang]}
                            </StyledLoadMore>
                        )}
                        {isModalOpen && (
                            <Modal closeReducer={closeModal}>
                                <ModalDetail />
                            </Modal>
                        )}
                    </>
                ) : (
                    <StyledTitle3>
                        {langOprions.noCarsRequest[lang]}
                    </StyledTitle3>
                )
            ) : (
                <StyledTitle3>{langOprions.noCars[lang]}</StyledTitle3>
            )}
        </>
    );
};

CarList.propTypes = {
    arrCars: PropTypes.array,
};

export default CarList;
