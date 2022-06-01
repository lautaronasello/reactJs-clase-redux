import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setColor } from "../../redux/actions";

const MasDetallePersonaje = () => {
    const {userId} = useParams();
    const color = useSelector(state => state.color.colorHeader);
    const dispatch = useDispatch();

    const handleColorRedux = () => {
        dispatch(setColor('red'));
    };

    return (
        <div>
            <h1>Detalle de personaje {userId}</h1>
            <button onClick={handleColorRedux}>cambiar color</button>
            <p>El color actual en el store es {color}</p>
        </div>
    );
};

export default MasDetallePersonaje;

