import styled from 'styled-components';

//export const StyledHomePage = styled.div``;

export const StyledImg = styled.img`
    margin: 0 auto;
`;

export const StyledTitle1 = styled.h1`
    text-align: center;
`;

export const StyledWrapper = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledBlock = styled.div`
    flex-basis: calc((100% - 2 * 24px) / 3);

    .center {
        display: block;
        margin: 0 auto;
    }
    .wrapper-text {
        margin-top: 20px;
        margin-bottom: 30px;
    }
`;
