import './App.css';

import AppRoutes from './routes/AppRoutes';
import AuthProvider from './auth/AuthProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</Provider>
		
	);
};

export default App;
