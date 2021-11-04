import React from 'react';

const TextField = ({label, type = 'text', name, value, error, max, min, onChange}) => {
    return (
        <div className="row">

            <div className="input col s12">
                <label htmlFor={name} >{label}</label>
                <input type={type} className={`form-control ${error ? 'invalid' : ''}`} id={name} name={name}
                       value={value} min={min} max={max} onChange={onChange}/>

                {error ? (
                    <div className="red-text">{error}</div>
                ) : (
                   ''
                )}
            </div>

        </div>
    );
};

export default TextField;