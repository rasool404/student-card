import React, {useEffect, useState} from 'react';
import TextField from "../components/text-field";
import getStudent from "../database";
import validator from "../utils/validator";
import {Link} from "react-router-dom";

const Form = () => {
    const emptyState = {
        firstName: '',
        lastName: '',
        yearOfBirth: '',
        portfolio: '',
    }

    const [data, setData] = useState(getStudent() || emptyState);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        validate();
    }, [data]);


    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        firstName: {
            isRequired: { message: "Поле 'Имя' обязательно для заполнения" },
            isValidName: {
                message: 'Поле должно содержать от 3 до 20 символов.',
            },
        },
        lastName: { isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" } },
        yearOfBirth: {
            isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
            isValidYear: {
                message: `Значение не должно быть меньше 1940 и больше ${new Date(
                    Date.now()
                ).getFullYear()}`,
            },
        },
        portfolio: {
            isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
            isURL: { message: 'URL введен неправильно. Пример ( https://google.com )' },
        },
    };

    function validate() {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return !Object.keys(errors).length;
    }

    const isValid = !Object.keys(errors).length;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem('student', JSON.stringify(data));
    };

    return (
        <div className='container'>
            <h2 className="center">{getStudent() ? 'Редактировать' : 'Создать'}</h2>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    label="Имя"
                    name="firstName"
                    value={data.firstName}
                    error={errors.firstName}
                    onChange={handleChange}
                />
                <TextField
                    label="Фамилия"
                    name="lastName"
                    value={data.lastName}
                    error={errors.lastName}
                    onChange={handleChange}
                />
                <TextField
                    label="Год рождения"
                    type="number"
                    name="yearOfBirth"
                    value={data.yearOfBirth}
                    error={errors.yearOfBirth}
                    min={1930}
                    max={new Date(Date.now()).getFullYear()}
                    onChange={handleChange}
                />
                <TextField
                    label="Портфолио"
                    name="portfolio"
                    value={data.portfolio}
                    error={errors.portfolio}
                    onChange={handleChange}
                />
                <div>
                    <button
                        className="btn btn-large"
                        disabled={!isValid}
                    >
                        {getStudent() ? 'Редактировать' : 'Изменить'}
                    </button>
                    <Link className="btn home" to="/">
                        <i className="material-icons">arrow_back</i>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Form;