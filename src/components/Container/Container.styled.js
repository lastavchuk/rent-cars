import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 320px;
    margin: 0 auto;
    padding: 8px;

    @media screen and (min-width: 576px) {
        width: 576px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 992px) {
        width: 992px;
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export default StyledContainer;
