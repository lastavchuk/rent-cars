import styled from 'styled-components';

export const ModalContainer = styled.div`
    .card-img {
        width: 461px;
        height: 248px;
        object-fit: cover;

        border-radius: 14px;
        background-color: #f3f3f2;
    }

    .card-title {
        margin-top: 14px;

        color: var(--secondary-text-color);
        font-size: 18px;
        font-weight: 500;
        line-height: 1.33;
    }
    .card-title-color {
        color: #3470ff;
    }
    .card-info-wrapper {
        margin-top: 8px;
    }
    .card-info {
        margin-top: 4px;

        color: var(--tag-text-color);
        font-size: 12px;
    }
    .card-info-tag {
        margin-right: 6px;
    }
    .card-info-tag:not(:last-child)::after {
        content: '|';
        margin-left: 6px;
    }
    .card-descr {
        margin-top: 14px;
        color: vat(--secondary-text-color);
        font-size: 14px;
        line-height: 1.43;
    }
    .card-additionals {
        margin-top: 24px;
    }
    .cart-additionals-title {
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
    }
    .card-tag-btn {
        display: inline-block;
        margin-top: 8px;
        padding: 7px 14px;

        font-size: 12px;
        letter-spacing: -0.24px;
        background-color: #f9f9f9;
        color: #363535;
        border-radius: 35px;
    }
    .card-tag-btn:not(:last-child) {
        margin-right: 8px;
    }

    .btn-link {
        display: inline-block;
        margin-top: 24px;
        padding: 12px 50px;

        border-radius: 12px;
        background-color: #3470ff;
        color: #ffffff;

        font-size: 14px;
        font-weight: 600;
        line-height: 1.43;
        text-align: center;

        &:focus,
        &:hover {
            background-color: #0b44cd;
        }
    }
`;
