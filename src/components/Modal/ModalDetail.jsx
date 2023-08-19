import { useSelector } from 'react-redux';
import { selectLang, selectModalData } from 'redux/selectors';
import { ModalContainer } from './ModalDetail.styled';
import langOprions from '../../assests/lang/langList';
import {
    parseAdress,
    parseMileage,
    parseRentalConditions,
    renderItems,
} from 'services/helpers';

const ModalDetail = () => {
    const lang = useSelector(selectLang);
    const carInfo = useSelector(selectModalData);

    const {
        id,
        img,
        year,
        make,
        model,
        type,
        rentalPrice,
        mileage,
        description,
        accessories,
        functionalities,
        rentalConditions,
        fuelConsumption,
        address,
        engineSize,
    } = carInfo;

    const arrConditions = parseRentalConditions(rentalConditions);
    const newAdress = parseAdress(address);

    const data1 = [
        newAdress[1],
        newAdress[2],
        `Id: ${id}`,
        `${langOprions.Year[lang]}: ${year}`,
        `${langOprions.Type[lang]}: ${type}`,
    ];

    const data2 = [
        `${langOprions.Fuel[lang]}: ${fuelConsumption}`,
        `${langOprions.Engine[lang]}: ${engineSize}`,
    ];

    return (
        <ModalContainer>
            <img
                className="card-img"
                width="461"
                height="248"
                src={img}
                alt={`${make} ${model} ${year}`}
            />
            <h2 className="card-title">
                {make} <span className="card-title-color">{model}</span>, {year}
            </h2>
            <div className="card-info-wrapper">
                <div className="card-info">{renderItems(data1)}</div>
                <div className="card-info">{renderItems(data2)}</div>
            </div>
            <div className="card-descr">{description}</div>
            <div className="card-additionals">
                <p className="cart-additionals-title">
                    {langOprions.Accessories[lang]}
                </p>
                <div className="card-info-wrapper">
                    <div className="card-info">{renderItems(accessories)}</div>
                    <div className="card-info">
                        {renderItems(functionalities)}
                    </div>
                </div>
            </div>
            <div className="card-additionals">
                <p className="cart-additionals-title">
                    {langOprions.Conditions[lang]}
                </p>
                <div>
                    <span className="card-tag-btn">
                        {arrConditions[0]}
                        <span className="card-title-color">
                            {arrConditions[1]}
                        </span>
                    </span>
                    <span className="card-tag-btn">{arrConditions[2]}</span>
                    <span className="card-tag-btn">{arrConditions[3]}</span>

                    <span className="card-tag-btn">
                        {langOprions.Mileage[lang]}{' '}
                        <span className="card-title-color">
                            {parseMileage(mileage)}
                        </span>
                    </span>
                    <span className="card-tag-btn">
                        {langOprions.Price[lang]}{' '}
                        <span className="card-title-color">{rentalPrice}$</span>
                    </span>
                </div>
            </div>

            <a href="tel:+380730000000" className="btn-link">
                {langOprions.rentalCar[lang]}
            </a>
        </ModalContainer>
    );
};

export default ModalDetail;
