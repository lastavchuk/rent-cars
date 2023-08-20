import styled from 'styled-components';

export const StyledHeader = styled.header`
    margin-bottom: 20px;
    color: #121417;
    background-color: #e3f2fd;

    ul {
        display: flex;
        gap: 15px;
        padding: 10px;
    }
    .active {
        color: #0b44cd;
    }
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right-bar {
        display: flex;
        align-items: center;
    }
    .nav-item:hover,
    .nav-item:focus {
        color: #3470ff;
    }
`;
