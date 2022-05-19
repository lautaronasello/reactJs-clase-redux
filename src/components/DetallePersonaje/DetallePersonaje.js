import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DetallePersonaje.css';
import CardPersonajesMapeados from '../CharacterCard/CardPersonajesMapeados';
import Loading from '../commons/Loading';

const DetallePersonaje = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log(character);

	const { userID } = useParams();
	/* es equivalente a 
	let id = useParams();

	let userID = id.id; 
	*/

	// console.log(userID);

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
							</div>
						);
					})}
				</div>
			}
		</div>
	);
};

export default DetallePersonaje;
