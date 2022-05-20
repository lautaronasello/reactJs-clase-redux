import React from "react";
import CustomFormulario from "../commons/CustomFormulario";

const initialValues = [
    {
        name: "Usuario",
        label: "Usuario",
        type: "text",
        required: true,
    },
    {
        name: "Contraseña",
        label: "Contraseña",
        type: "password",
        required: true,
    },
];

const urlFetch = "https://jsonplaceholder.typicode.com/posts";
const urlNavigate = -1;

const FormularioRegistro = () => {
    return (
        <CustomFormulario
            initialValues={initialValues}
            urlFetch={urlFetch}
            urlNavigate={urlNavigate}
        />
    );
}

export default FormularioRegistro;

        
