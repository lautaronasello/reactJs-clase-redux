//pagina no encontrada breaking bad
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound__container">
                <img className="notFound__img" src="https://media3.giphy.com/media/vPN3zK9dNL236/giphy.gif?cid=ecf05e47w4fpimnr23zwi5blkon7vz9zc2mfxl5slyguwcl3&rid=giphy.gif&ct=g" alt=""/>
                <h1 className="notFound__title">404</h1>
                <p className="">
                    Pagina no encontrada
                </p>
                
            </div>
        </div>
    );
    
}

export default NotFound;