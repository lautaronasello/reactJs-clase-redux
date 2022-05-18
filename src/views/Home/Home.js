import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

//agregar un home de breaking bad
const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<h1 className="home__title">Breaking Bad</h1>
				<p className="home__text">
					Este es un home de prueba
				</p>
				<Button component={Link} to="/personajes" className="home__button">
					Ver personajes
				</Button>
			</div>
		</div>
	);
	
};

export default Home;
