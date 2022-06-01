import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute() {
    const auth = useAuth(); // contextValue al momento de renderizar
    const location = useLocation();

    console.log("esto es location ", location);
    console.log("esto es auth ", auth);
    
    return (
        <>
        {auth.isLogged() ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} />}
            
        </>     
            
    )
}


/*

? <Element /> : <Navigate to={{ pathname: 'login', state: { from: location } }} />
*/