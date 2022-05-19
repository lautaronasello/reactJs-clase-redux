import './App.css';

import AppRoutes from './routes/AppRoutes';
import AuthProvider from './auth/AuthProvider';

const App = () => {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
		
	);
};

export default App;
