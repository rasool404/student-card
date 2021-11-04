import React from 'react';
import getStudent from "../database";
import Card from "../components/card";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='container center'>
            <h1>Карточка студента</h1>
            {!getStudent() ? (
                <>
                <h5 className='red-text darken-2'>Нет данных</h5>
                <Link className="waves-effect waves-light btn-large cyan" to='/form'><i
                    className="material-icons right">add</i>Добавить</Link>
                </>
            ) : (
                <Card />
            )}
        </div>
    );
};

export default Home;