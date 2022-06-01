import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function LoginPage() {
    const auth = useAuth(); //contextValue  al momento de renderizar (user, isLogged, login, logout)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const color = useSelector(state => state.color.colorHeader);

    const handleLogin = () => {
        auth.login();
        navigate(location.state?.from || '/');
    }
//boton color naranja
    return (
        <div>
            <button onClick={handleLogin} style={`{ backgroundColor: ${color}}`}>Login</button>
        </div>
    )
}



