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
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

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
                        pattern: {
                            value: /^[A-Za-z а-яА-ЯёЁіІїЇъЪ]+$/i,
                            message: `${langOprions.errOnlyLetters[lang]}`,
                        },
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

                {errors?.brand && <p>{errors.from.message}</p>}
            </div>

            <div className="wrapper">
                <StyledLabel>{langOprions.price1Hour[lang]}</StyledLabel>
                <select
                    className="form-select"
                    {...register('price', {
                        min: {
                            value: 0,
                            message: `${langOprions.errMustBe[lang]}`,
                        },
                    })}
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
                {errors?.price && <p>{errors.price.message}</p>}
            </div>

            <div className="wrapper">
                <StyledLabel>{langOprions.carMileage[lang]}</StyledLabel>
                <div>
                    <StyledInput
                        className="input-left"
                        type="number"
                        placeholder={langOprions.fromField[lang]}
                        {...register('from', {
                            min: {
                                value: 0,
                                message: `${langOprions.errMustBe[lang]}`,
                            },
                            validate: {
                                fromTo: () => {
                                    const watchFrom = watch('from');
                                    const watchTo = watch('to');
                                    if (!!watchFrom && !!watchTo) {
                                        delete errors.to;
                                        return (
                                            Number(watchFrom) <= Number(watchTo)
                                        );
                                    }
                                },
                            },
                        })}
                    />

                    <StyledInput
                        className="input-right"
                        type="number"
                        placeholder={langOprions.toField[lang]}
                        {...register('to', {
                            min: {
                                value: 0,
                                message: `${langOprions.errMustBe[lang]}`,
                            },
                            validate: {
                                fromTo: () => {
                                    const watchFrom = watch('from');
                                    const watchTo = watch('to');
                                    if (!!watchFrom && !!watchTo) {
                                        delete errors.from;
                                        return (
                                            Number(watchTo) >= Number(watchFrom)
                                        );
                                    }
                                },
                            },
                        })}
                    />

                    {errors?.from?.type === 'min' && (
                        <p>{errors.from.message}</p>
                    )}
                    {errors?.from?.type === 'fromTo' && (
                        <p>{langOprions.errFromTo[lang]}</p>
                    )}

                    {errors?.to?.type === 'min' && <p>{errors.to.message}</p>}
                    {errors?.to?.type === 'fromTo' && (
                        <p>{langOprions.errFromTo[lang]}</p>
                    )}
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
