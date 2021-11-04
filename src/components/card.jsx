import React from 'react';
import getStudent from "../database";
import getAge from "../utils/getAge";
import {Link} from "react-router-dom";

const Card = () => {
    const { firstName, lastName, yearOfBirth, portfolio } = getStudent();

    return (
        <div className="row" >
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                       <div className="card-bg"></div>
                            <h2 className="card-title"> {firstName} {lastName}</h2>
                            <Link to='/form' className="btn-floating large halfway-fab waves-effect waves-light red"><i
                                className="material-icons">edit</i></Link>
                    </div>
                    <div className="card-content">

                        <ul className="collection">
                            <li className="collection-item">Год рождения: <b>{yearOfBirth}</b></li>
                            <li className="collection-item"><b>{getAge()}</b></li>
                            <li className="collection-item">Портфолио: <a href={portfolio} target="_blank">{portfolio}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;