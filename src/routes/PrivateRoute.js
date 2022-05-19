import { Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute() {
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <>
        {auth.isLogged() ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} />}
            
        </>     
            
    )
}


/*

? <Element /> : <Navigate to={{ pathname: 'login', state: { from: location } }} />
*/