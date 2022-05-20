import React, { useEffect, useState } from 'react';
import './DetallePersonaje.css';
import CardPersonajesMapeados from '../CharacterCard/CardPersonajesMapeados';
import Loading from '../commons/Loading';
import { Button } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';

const DetallePersonaje = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { userID } = useParams();


	useEffect(() => {
		fetch(`https://breakingbadapi.com/api/characters/${userID}`)
			.then((res) =>{
				if(res){
					return res.json();
				}
			})
			.then((data) => {
					console.log(data)
					setCharacter(data);
					setIsLoading(false);
				
			});
	}, [userID]);

	return (
		<div>
			{isLoading 
				? 
				<Loading />
			 	: 
				<div className='Personaje-detail'>

					{character.map((char) => {
						return (
							<div key={char.char_id}>
								<CardPersonajesMapeados data={char} />
								<Button component={Link} to='mas-detalles' variant='contained'>Más detalles anidados</Button>
							</div>
						);
					})}
					
					
				</div>
			}
		</div>
	);
};

export default DetallePersonaje;
