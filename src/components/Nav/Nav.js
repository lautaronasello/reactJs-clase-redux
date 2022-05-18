import './Nav.css';
import { Link, NavLink } from 'react-router-dom';

//menu lateral con NavLink de reat router dom v6
let activeStyle = {
    textDecoration: "underline",
	color: "red"
  };



const Nav = () => {

	return (
		<nav className="Navigation">
			<NavLink to="/" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Home
			</NavLink>
			<NavLink to="/personajes" className="nav-link" >
				Personajes
			</NavLink>
			<NavLink to="/about" className="nav-link" >
				About
			</NavLink>
			<NavLink to="/contact" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Contacto 
			</NavLink>
			<NavLink to="/ruta-que-no-existe" style={({isActive }) => isActive ? activeStyle : undefined } className="nav-link">
				Desconocido 
			</NavLink>

		</nav>
	);

	
};

export default Nav;
