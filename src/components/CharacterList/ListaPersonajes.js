import React, { useState, useEffect } from 'react';
import './ListaPersonajes.css';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

import CardPersonajesMapeados from '../CharacterCard/CardPersonajesMapeados';
import Loading from '../commons/Loading';


const ListaPersonajes = () => {

	const [personajes, setPersonajes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://breakingbadapi.com/api/characters')
			.then(res => res.json())
			.then(data => {
				setPersonajes(data);//[]
				setLoading(false);
			});
	}, []);
//condicion ? true : false
	return (
		<>
			{
			loading 
			? <Loading />
			: 
			<div className='Personaje-container'>
				{personajes.map((personaje) => {
					return (
						<div key={personaje.char_id} >
							<Link to={`/personajes/${personaje.char_id}`}>
								<CardPersonajesMapeados data={personaje} />
							</Link>
						</div>
					);
					
				})
				}
			</div>
			}
			
		</>
	);
};

export default ListaPersonajes;
