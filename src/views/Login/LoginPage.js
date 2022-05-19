import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleLogin = () => {
        auth.login();
        navigate(location.state?.from || '/');
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}



