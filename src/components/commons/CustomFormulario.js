//formik
import React, { useState, useEffect } from 'react';
import { Field, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const CustomFormulario = ({ initialValues, urlFetch, urlNavigate, }) => {
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            setLoading(true);
            setError(false);
            fetch(urlFetch, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setLoading(false);
                    navigate(urlNavigate);
                }
                )
                .catch(error => {
                    setError(true);
                    setLoading(false);
                }
                );
        }
    });

    useEffect(() => {
        setFormulario(initialValues);
    }
        , [initialValues]);

    useEffect(() => {
        if (error) {
            formik.setFieldError('mensaje', 'Error en el servidor');
        }
    }, [error]);



    return (
        <form onSubmit={formik.handleSubmit}>
            {formulario.map(item => (
                <div key={item.name}>
                    <label htmlFor={item.name}>{item.label}</label>
                    {item.type === 'textarea' ? 
                    <textarea name="textarea" rows="5" cols="25" onChange={formik.handleChange} value={item.name} />
                    :
                    <input type={item.type} name={item.name} id={item.name} onChange={formik.handleChange} />}
                </div>
            ))}
            <button type="submit">{loading ? 'Cargando...' : 'Enviar'}</button>
            {error && <p>Error al enviar el formulario</p>}
        </form>
    );
    


};

export default CustomFormulario;

