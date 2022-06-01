import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function LoginPage() {
    const auth = useAuth(); //contextValue  al momento de renderizar (user, isLogged, login, logout)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const color = useSelector(state => state.colorData.colorHeader);

    const handleLogin = () => {
        auth.login();
        navigate(location.state?.from || '/');
    }

    return (
        <div>
            <Button variant='contained'  onClick={handleLogin} style={{ backgroundColor: color}} >
                login
            </Button>
        </div>
    )
}



