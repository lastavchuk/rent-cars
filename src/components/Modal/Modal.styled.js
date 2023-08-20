import styled from 'styled-components';

export const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(18, 20, 23, 0.5);
    overscroll-behavior: contain;
    z-index: 5;
`;

export const StyledModal = styled.div`
    width: 541px;
    min-height: 300px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 40px;
    background-color: var(--bg-color);
    border-radius: 24px;
`;

export const IconCloseModal = styled.div`
    width: 24px;
    height: 24px;

    position: absolute;
    top: 16px;
    right: 16px;

    color: var(--secondary-text-color);
    transition: color var(--tr-rule);

    &:hover {
        cursor: pointer;
        color: #3470ff;
    }
`;
