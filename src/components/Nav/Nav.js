import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

//menu lateral con NavLink de reat router dom v6
let activeStyle = {
    textDecoration: "underline",
	color: "orange"
  };



const Nav = () => {
	const auth = useAuth();

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
			<NavLink to='/dashboard' className="nav-link" >Dashboard</NavLink>
			{!auth.isLogged() && (
                <>
                    <NavLink to='/login' className="nav-link" >Login</NavLink>
                    <NavLink to='/register' className="nav-link" >Register</NavLink>
                </>
            )}
			{auth.isLogged() && <button onClick={() => auth.logout()}>Cerrar Sesion</button>}

		</nav>
	);

	
};

export default Nav;
