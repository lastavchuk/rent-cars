import Button from 'components/Button/Button';
import { useForm } from 'react-hook-form';
import langOprions from '../../assests/lang/langList';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectLang } from 'redux/selectors';
import { getCarBrand, getPrice } from 'services/helpers';
import { setFilter } from 'redux/cars/carsSlice';
import { StyledFilter, StyledInput, StyledLabel } from './Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();
    const lang = useSelector(selectLang);
    const all = useSelector(selectAllCars);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        dispatch(setFilter(data));
    };

    return (
        <StyledFilter onSubmit={handleSubmit(onSubmit)}>
            <div className="wrapper">
                <StyledLabel>{langOprions.carBrand[lang]}</StyledLabel>
                <select
                    className="form-select"
                    {...register('brand', {
                        pattern: /^[A-Za-z 0-9а-яА-ЯёЁіІїЇъЪ]+$/i,
                    })}
                >
                    <option value="">{langOprions.selectBrand[lang]}</option>
                    {!!all &&
                        getCarBrand(all).map((brand, idx) => (
                            <option
                                className="form-option"
                                key={idx}
                                value={brand}
                            >
                                {brand}
                            </option>
                        ))}
                </select>

                {errors?.brand?.type === 'pattern' && (
                    <p>Only letters and numbers</p>
                )}
            </div>

            <div className="wrapper">
                <StyledLabel>{langOprions.price1Hour[lang]}</StyledLabel>
                <select
                    className="form-select"
                    {...register('price', { min: 0 })}
                >
                    <option value="">{langOprions.toPrice[lang]}</option>
                    {!!all &&
                        getPrice(all).map((brand, idx) => (
                            <option
                                className="form-option"
                                key={idx}
                                value={brand}
                            >
                                {brand}
                            </option>
                        ))}
                </select>
                {errors.price && <p>Must be 0 or greater</p>}
            </div>

            <div className="wrapper">
                <StyledLabel>{langOprions.carMileage[lang]}</StyledLabel>
                <div>
                    <StyledInput
                        className="input-left"
                        type="number"
                        placeholder="From"
                        {...register('from', { min: 0 })}
                    />
                    {errors.from && <p>Must be 0 or greater</p>}

                    <StyledInput
                        className="input-right"
                        type="number"
                        placeholder="To"
                        {...register('to', { min: 0 })}
                    />
                    {errors.to && <p>Must be 0 or greater</p>}
                </div>
            </div>

            <Button
                type="submit"
                text={langOprions.btnSearch[lang]}
                $variant="search"
            />
        </StyledFilter>
    );
};

export default Filter;
