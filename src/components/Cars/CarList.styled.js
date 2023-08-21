import styled from 'styled-components';

export const StyledCarList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 29px;
    row-gap: 50px;
`;

export const StyledLoadMore = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 100px;

    background-color: transparent;
    color: #3470ff;
    font-size: 16px;
    font-weight: 500;
    text-decoration-line: underline;
    transition: color var(--tr-rule);

    &:hover,
    &:focus {
        color: #0b44cd;
    }
`;

export const StyledTitle3 = styled.h3`
    text-align: center;
`;
