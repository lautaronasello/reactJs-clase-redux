import React from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTES
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';

// VIEWS O VISTAS
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import DetallePersonaje from '../components/DetallePersonaje/DetallePersonaje';
import PersonajesContainer from "../components/CharacterList/PersonajesContainer";
import NotFound from '../views/notFound/NotFound';
import LoginPage from "../views/Login/LoginPage";
import RegisterPage from "../views/Login/RegisterPage";
import DashboardPage from "../views/Dashboard/DashboardPage";

//RUTAS

import PrivateRoute from "./PrivateRoute";
import MasDetallePersonaje from "../components/DetallePersonaje/MasDetallePersonaje";


function AppRoutes() {
  return (
    <Router>
			<div className='App'>
				<Header />
				<Nav />
				<Routes> {/* <Switch> */}
					<Route index element={<Home />} />
					<Route path='/personajes' element={<PersonajesContainer />} />	
					<Route path='/personajes/:userID' element={<DetallePersonaje />}>
						<Route path='mas-detalles' element={<MasDetallePersonaje />} />	
					</Route>	

					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />

					<Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route exact path='/dashboard' element={<PrivateRoute/>}>
                        <Route exact path='/dashboard' element={<DashboardPage/>}/>
                    </Route>
                    {/* <PrivateRoute path='/dashboard' element={<DashboardPage />} /> */}

					<Route path='*' element={<NotFound />} />
					
				</Routes>
			</div>
			
		</Router>
  );
}

export default AppRoutes;


/*
<Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
</Route>
*/