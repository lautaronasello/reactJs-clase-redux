//pagina no encontrada breaking bad
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound__container">
                <h1 className="notFound__title">404</h1>
                <p className="">
                    Pagina no encontrada
                </p>
                <img className="notFound__img" src="https://media.giphy.com/media/3o7btLwXcwJKJZxXqU/giphy.gif" alt=""/>

            </div>
        </div>
    );
    
}

export default NotFound;