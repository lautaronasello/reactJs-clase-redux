import './App.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTES
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

// VIEWS O VISTAS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import DetallePersonaje from './views/CharacterDetail/DetallePersonaje';
import ListaPersonajes from './components/CharacterList/ListaPersonajes';
import NotFound from './views/notFound/NotFound';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Nav />
				<Routes> {/* <Switch> */}
					<Route index element={<Home />} />
					<Route path='/personajes' element={<ListaPersonajes />} />
					<Route path='/personajes/:userID' element={<DetallePersonaje />} />	
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />

					<Route path='*' element={<NotFound />} />
					
				</Routes>
			</div>
			
		</Router>
	);
};

export default App;
