import React from 'react';
import { Link } from 'react-router-dom';
import PersonajesUI from '../CharacterCard/PersonajesUI';

const PersonajesList = ({ data }) => {
    return (
        <div className='Personaje-container'>
            {
                data.map(personaje => (
                    <div key={personaje.char_id} >
                        <Link to={`/personajes/${personaje.char_id}`}>
                            <PersonajesUI data={personaje} />
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}
export default PersonajesList;