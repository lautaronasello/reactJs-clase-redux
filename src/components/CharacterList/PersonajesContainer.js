import React, { useEffect } from 'react';
import './ListaPersonajes.css';

import { useDispatch, useSelector } from 'react-redux';
import { onFetchCharacters } from '../../redux/actions';
import Loading from '../commons/Loading';
import PersonajesList from './PersonajesList';



const PersonajesContainer = () => {
	
	const dispatch = useDispatch();

	const characters = useSelector(state => state.charactersData.characters);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		dispatch(onFetchCharacters());
	}
	, [dispatch]);

	useEffect(() => {
		if(characters.length > 0) {
			console.log(characters)
			setIsLoading(false);
		}
	} , [characters]);

		

	return (
		<>
			{isLoading ? <Loading /> : <PersonajesList data={characters} />}
		</>
	);
};


export default PersonajesContainer;