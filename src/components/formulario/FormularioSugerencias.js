//formulario de sugerencia con nombre y mensaje de sugerencia
import React, { useState, useEffect } from 'react';
import CustomFormulario from '../commons/CustomFormulario';

//que nos lleve a la página anterior que estabamos navegando 
const initialValues = [
    {
        name: 'nombre',
        label: 'Nombre',
        type: 'text',
        required: false,
    },
    {
        name: 'mensaje',
        label: 'Mensaje',
        type: 'textarea',
        required: true,
    },
];

const urlFetch = 'https://jsonplaceholder.typicode.com/posts';
const urlNavigate = -1;

const FormularioSugerencias = () => {
    return (
        <CustomFormulario
            initialValues={initialValues}
            urlFetch={urlFetch}
            urlNavigate={urlNavigate}
        />
    );
}

export default FormularioSugerencias;



