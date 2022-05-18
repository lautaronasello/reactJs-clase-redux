//formulario de contacto: nombre, apellido, mail y mensaje 
import React, { useState, useEffect } from 'react';
import CustomFormulario from '../commons/CustomFormulario';

const initialValues = [
    {
        name: 'nombre',
        label: 'Nombre',
        type: 'text',
        required: true,
    },
    {
        name: 'apellido',
        label: 'Apellido',
        type: 'text',
        required: true,
    },
    {
        name: 'mail',
        label: 'Mail',
        type: 'email',
        required: true,
    },
    {
        name: 'mensaje',
        label: 'Mensaje',
        type: 'text',
        required: true,
    },
];
//url post a jsonplaceholder
const urlFetch = 'https://jsonplaceholder.typicode.com/posts';
const urlNavigate = '/';

const FormularioContacto = () => {
    return (
        <CustomFormulario
            initialValues={initialValues}
            urlFetch={urlFetch}
            urlNavigate={urlNavigate}
        />
    );
};

export default FormularioContacto;
