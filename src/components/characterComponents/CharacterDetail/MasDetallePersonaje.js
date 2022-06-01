import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setColor } from '../../../redux/actions';

const MasDetallePersonaje = () => {
    const {userId} = useParams();
    const color = useSelector(state => state.colorData.colorHeader);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleColorRedux = () => {
        if(color === '#075e08') {
         dispatch(setColor('red'));
        } else {
         dispatch(setColor('#075e08'));
        }
        setTimeout(() => {
            navigate('/');
        }, 2000);

    };


    return (
        <div>
            <h1>Detalle de personaje {userId}</h1>
            <Button variant='contained' onClick={handleColorRedux} style={{ backgroundColor: color}}>
                Cambiar Color / ir al Home
            </Button>
            <p>El color actual en el store es {color}</p>
        </div>
    );
};

export default MasDetallePersonaje;

