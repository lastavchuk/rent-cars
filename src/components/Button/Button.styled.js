import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    width: 100%;

    border-radius: 12px;
    background-color: #3470ff;
    color: #ffffff;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    text-align: center;

    transition: background-color var(--tr-rule);

    &:focus,
    &:hover {
        background-color: #0b44cd;
    }

    ${({ $variant }) =>
        $variant === 'primary' &&
        css`
            padding: 12px 0;
        `}

    ${({ $variant }) =>
        $variant === 'search' &&
        css`
            width: auto;
            padding: 14px 44px;
        `}
`;
