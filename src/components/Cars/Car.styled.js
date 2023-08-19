import styled from 'styled-components';

export const StyledCar = styled.li`
    position: relative;
    width: 274px;

    .card-img {
        width: 274px;
        height: 268px;
        border-radius: 14px;
        object-fit: cover;
        background-color: #f3f3f2;
    }
    .card-title {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;

        color: #121417;
        font-size: 16px;
        font-weight: 500;
    }
    .card-title-color {
        color: #3470ff;
    }
    .card-info {
        color: rgba(18, 20, 23, 0.5);
        font-size: 12px;
    }
    .card-info-tag {
        margin-right: 6px;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .card-info-tag:not(:last-child)::after {
        content: '|';
        margin-left: 6px;
    }
    .btn-wrapper {
        margin-top: 28px;
    }
    .card-btn-hearth {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 18px;
        height: 18px;
        cursor: pointer;

        background-color: transparent;
        fill: transparent;
        stroke: rgba(255, 255, 255, 0.8);

        transition: stroke var(--tr-rule);
    }

    .card-btn-hearth:hover,
    .card-btn-hearth:focus {
        stroke: rgba(52, 112, 255, 1);
    }
    .card-favorite {
        fill: rgba(52, 112, 255, 1);
        stroke: rgba(52, 112, 255, 1);
    }
`;
