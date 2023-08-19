import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import langOprions from '../../assests/lang/langList';

import sprite from '../../images/sprite.svg';
import { IconCloseModal, Backdrop, StyledModal } from './Modal.styled';
import { selectLang } from 'redux/selectors';

const modalContainer = document.getElementById('modal');

const Modal = ({ children, closeReducer }) => {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);

    useEffect(() => {
        const onCloseModalEsc = evt => {
            if (evt.code === 'Escape') {
                document.body.style.overflow = 'visible';
                dispatch(closeReducer());
            }
        };

        window.addEventListener('keydown', onCloseModalEsc);
        return () => {
            window.removeEventListener('keydown', onCloseModalEsc);
        };
    }, [closeReducer, dispatch]);

    const onCloseModal = evt => {
        if (evt.currentTarget === evt.target) {
            document.body.style.overflow = 'visible';
            dispatch(closeReducer());
        }
    };
    const handleCloseModal = () => {
        document.body.style.overflow = 'visible';
        dispatch(closeReducer());
    };

    return createPortal(
        <Backdrop onClick={onCloseModal}>
            <StyledModal>
                <IconCloseModal onClick={handleCloseModal}>
                    <svg
                        width="24px"
                        height="24px"
                        aria-label={langOprions.closeModal[lang]}
                    >
                        <use href={sprite + '#icon-close'} />
                    </svg>
                </IconCloseModal>
                {children}
            </StyledModal>
        </Backdrop>,
        modalContainer
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeReducer: PropTypes.func.isRequired,
};

export default Modal;
