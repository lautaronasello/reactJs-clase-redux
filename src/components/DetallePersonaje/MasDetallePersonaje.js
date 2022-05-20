import React from "react";
import { useParams } from "react-router-dom";

const MasDetallePersonaje = () => {
    const {userId} = useParams();

    return (
        <div>
            <h1>Detalle de personaje {userId}</h1>
        </div>
    );
};

export default MasDetallePersonaje;

