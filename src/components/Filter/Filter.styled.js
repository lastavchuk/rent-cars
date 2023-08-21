import styled from 'styled-components';

export const StyledFilter = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 18px;

    margin-bottom: 50px;

    p {
        position: absolute;
        bottom: -30px;
        left: 0;
        color: #bf1650;
    }

    p::before {
        display: inline;
        content: '⚠ ';
    }

    .form-select {
        padding: 14px 18px;
        border: none;
        border-radius: 14px;
        background-color: #f7f7fb;
    }
    .form-select::-webkit-scrollbar {
        width: 8px;
        background-color: #ffffff;
    }

    .form-select::-webkit-scrollbar-thumb {
        background-color: rgba(18, 20, 23, 0.05);
        border-radius: 4px;
    }
    .form-option {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;

        background-color: #ffffff;
        color: rgba(18, 20, 23, 0.2);
    }
    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledLabel = styled.label`
    margin-bottom: 8px;
    color: var(--form-text-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
`;
export const StyledInput = styled.input`
    width: 160px;
    height: 48px;
    padding: 14px 24px;

    border: none;
    background-color: #f7f7fb;

    &.input-left {
        border-radius: 14px 0px 0px 14px;
        border-right: 1px solid rgba(138, 138, 137, 0.2);
    }
    &.input-right {
        border-radius: 0px 14px 14px 0px;
    }
`;
