import styled from 'styled-components';

export const StyledFilter = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 18px;

    margin-bottom: 50px;

    .form-select {
        padding: 14px 18px;
        border: none;
        border-radius: 14px;
        background-color: #f7f7fb;
    }
    .form-option {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;

        color: rgba(18, 20, 23, 0.2);
    }
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .ss {
        height: 48px;
    }
`;

export const StyledLabel = styled.label`
    margin-bottom: 8px;
    color: #8a8a89;
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
